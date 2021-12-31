import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, TouchableOpacity } from "react-native";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import Navbar from "../../components/Navbar";
import { postTags, userAuth } from "../../store";

import AddTags from "./AddTags";
import { styles } from "./style";

const CreatePost = view((): JSX.Element => {
  const [publishBtnDisabled, setPublishBtnDisabled] = useState<boolean>(true);

  const [title, setTitle] = useState(null);
  const [coverImage, setCoverImage] = useState<string>("");

  const [markdown, setMarkdown] = useState<string>("");
  const [addTags, setAddTags] = useState<boolean>(false);

  const [cookies] = useCookies();

  const publishBtnBGColour = {
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

  const extractImageFromMarkdown = (text: any): any => {
    try {
      const _coverImage = text.match(/!\[.*?\]\((.*?)\)/)[1];
      if (_coverImage !== null && _coverImage !== undefined) {
        return _coverImage;
      }
    } catch {
      return null;
    }
  };

  const extractFirstHeadingFromMarkdown = (text: any): any => {
    try {
      const _title = text.match(/# (.*)/)[1];
      if (_title !== null && _title !== undefined) {
        return _title;
      }
    } catch {
      return null;
    }
  };

  const getPostInformation = (): void => {
    if (markdown.length > 100) {
      const _coverImage = extractImageFromMarkdown(markdown);
      if (_coverImage !== null) {
        setCoverImage(_coverImage);
      }

      const _title = extractFirstHeadingFromMarkdown(markdown);
      if (_title !== null) {
        setTitle(_title);
      }
    }
  };

  const handlePublishPost = (): void => {
    if (markdown.length > 100) {
      const _title = {
        title:
          title !== null && title !== undefined
            ? title
            : "Author was too 'cool' to follow markdown guidelines 🙄",
      };
      const _data = {
        text: markdown,
        cover_image: coverImage,
        tags: postTags.tags,
      };

      const data = {
        ..._data,
        ..._title,
      };
      const endpoint = "http://127.0.0.1:8000/api/v1/posts/create/";

      let token = `Bearer ${cookies.UIDT}`;

      axios
        .post(endpoint, data, {
          headers: {
            Authorization: token,
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

  const handleEditorChange = ({ html, text }: any): void => {
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
  const renderAddTagsForm = (): JSX.Element => {
    return (
      <div className="flex">
        <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-1/4">
          <Navbar />
        </aside>
        <main className="w-full overflow-y-scroll h-screen sticky border-l border-gray-300 top-0">
          <div className="sticky top-0 flex justify-between py-2 px-3">
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
          <AddTags />
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
