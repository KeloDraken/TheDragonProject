import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, TouchableOpacity } from "react-native";
import { WithContext as ReactTags } from "react-tag-input";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import Navbar from "../../components/Navbar";
import { postTags, userAuth } from "../../store";

import { styles } from "./style";

interface Tag {
  id: string;
  text: string;
}

const CreatePost = view((): JSX.Element => {
  const [publishBtnDisabled, setPublishBtnDisabled] = useState<boolean>(true);

  const [title, setTitle] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");

  const [markdown, setMarkdown] = useState<string>("");
  const [addTags, setAddTags] = useState<boolean>(false);
  const [tags, setTags] = useState<Array<Tag>>([]);

  const [cookies] = useCookies();

  const publishBtnBGColour: object = {
    backgroundColor: publishBtnDisabled ? "#4c4c4c" : "#000",
  };

  useEffect((): void => {
    if (!userAuth.isLoggedIn) {
      window.location.replace("/");
    }

    if (markdown.length > 100) {
      setPublishBtnDisabled(false);
    } else {
      setPublishBtnDisabled(true);
    }
  }, [markdown]);

  const extractImageFromMarkdown = (text: string): string => {
    try {
      const _coverImage: string = text.match(/!\[.*?\]\((.*?)\)/)![1];
      if (_coverImage !== null && _coverImage !== undefined) {
        return _coverImage;
      }
      return "";
    } catch {
      return "";
    }
  };

  const extractFirstHeadingFromMarkdown = (text: string): string => {
    try {
      const _title: string = text.match(/# (.*)/)![1];
      if (_title !== null && _title !== undefined) {
        return _title;
      }
      return "";
    } catch {
      return "";
    }
  };

  const getPostInformation = (): void => {
    if (markdown.length > 100) {
      const _coverImage: string = extractImageFromMarkdown(markdown);
      if (_coverImage !== "") {
        setCoverImage(_coverImage);
      }

      const _title: string = extractFirstHeadingFromMarkdown(markdown);
      if (_title !== "") {
        setTitle(_title);
      }
    }
  };
  const tagsToString = (): string => {
    if (tags.length !== 0 && tags !== null && tags !== undefined) {
      const tag_list: string[] = [];
      tags.forEach(function (value, i) {
        tag_list.push(value.text);
      });
      return tag_list.join(", ");
    }
    return "";
  };
  const handlePublishPost = (): void => {
    if (markdown.length > 100) {
      const _title: object = {
        title:
          title !== null && title !== undefined
            ? title
            : "Author was too 'cool' to follow markdown guidelines 🙄",
      };

      const _data: object = {
        text: markdown,
        cover_image: coverImage,
        tags: tagsToString(),
      };

      const data: object = {
        ..._data,
        ..._title,
      };

      const endpoint: string = "http://127.0.0.1:8000/api/v1/posts/create/";

      axios
        .post(endpoint, data, {
          headers: {
            Authorization: `Bearer ${cookies.UIDT}`,
            "Content-Type": "application/json",
          },
        })
        .then((response): void => {
          if (response.status === 200) {
            postTags.tags = "";
            window.location.href = `/post/${response.data.object_id}/`;
          }
        })
        .catch((error): void => console.error(error));
    }
  };

  const handleEditorChange = ({
    html,
    text,
  }: {
    html: string;
    text: string;
  }): void => {
    setMarkdown(text);
    getPostInformation();
  };

  const mdParser = new MarkdownIt();

  const renderMarkdownForm = (): JSX.Element => {
    return (
      <div className="flex">
        <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-1/4">
          <Navbar />
        </aside>

        <main className="w-full overflow-y-scroll h-screen sticky top-0">
          <div className="sticky top-0 flex justify-between py-2 border-l border-gray-300 px-3">
            <h1 className="hidden text-black lg:block xl:block 2xl:block font-bold text-3xl">
              Share your insights...
            </h1>
            <TouchableOpacity
              onPress={() => setAddTags(true)}
              style={[styles.loadMoreBtn, publishBtnBGColour]}
              disabled={publishBtnDisabled}
            >
              <Text style={styles.loadMoreBtnText}>next</Text>
            </TouchableOpacity>
          </div>
          <MdEditor
            className="h-screen"
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </main>
      </div>
    );
  };

  const handleDelete = (i: any) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: any) => {
    setTags([...tags, tag]);
  };
  const renderAddTagsForm = (): JSX.Element => {
    return (
      <div className="flex">
        <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-1/4">
          <Navbar />
        </aside>
        <main className="w-full overflow-y-scroll h-screen sticky border-l border-gray-300 top-0">
          <div className="sticky top-0 flex mb-20 justify-between py-2 px-3">
            <h1 className="hidden text-black lg:block xl:block 2xl:block font-bold text-3xl">
              Add tags so that people can find your post more easily...
            </h1>
            <TouchableOpacity
              onPress={() => handlePublishPost()}
              style={[styles.loadMoreBtn, publishBtnBGColour]}
              disabled={publishBtnDisabled}
            >
              <Text style={styles.loadMoreBtnText}>publish</Text>
            </TouchableOpacity>
          </div>
          <div className="flex mx-32 justify-center">
            <ReactTags
              tags={tags}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              maxLength={100}
              classNames={{
                tag: "bg-gray-300 mx-1 my-4 rounded font-bold text-lg text-black p-1",
                tagInputField:
                  "w-full placeholder-black text-2xl px-8 py-4 text-black mt-3 rounded bg-gray-200",
              }}
            />
          </div>
        </main>
      </div>
    );
  };

  if (addTags) {
    return renderAddTagsForm();
  } else {
    return renderMarkdownForm();
  }
});
export default CreatePost;
