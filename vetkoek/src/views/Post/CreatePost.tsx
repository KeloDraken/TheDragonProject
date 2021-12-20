import axios from "axios";
import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
import { Text, TouchableOpacity } from "react-native";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import Navbar from "../../components/Navbar";
import { styles } from "./style";
import { userAuth } from "../../store";
import { view } from "@risingstack/react-easy-state";

const CreatePost = view(() => {
  const [markdown, setMarkdown] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [title, setTitle] = useState(null);
  const [publishBtnDisabled, setPublishBtnDisabled] = useState<boolean>(true);

  const publishBtnBGColour = {
    backgroundColor: publishBtnDisabled ? "#4c4c4c" : "#000",
  };

  useEffect(() => {
    if (!userAuth.isLoggedIn) {
      window.location.replace("/");
    }

    if (markdown.length > 100) {
      setPublishBtnDisabled(false);
    } else {
      setPublishBtnDisabled(true);
    }
  }, [markdown]);

  const extractImageFromMarkdown = (text: any) => {
    try {
      const _coverImage = text.match(/!\[.*?\]\((.*?)\)/)[1];
      if (_coverImage !== null && _coverImage !== undefined) {
        return _coverImage;
      }
    } catch {
      return null;
    }
  };

  const extractFirstHeadingFromMarkdown = (text: any) => {
    try {
      const _title = text.match(/# (.*)/)[1];
      if (_title !== null && _title !== undefined) {
        return _title;
      }
    } catch {
      return null;
    }
  };

  const getPostInformation = () => {
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

  const handlePublishPost = () => {
    if (markdown.length > 100) {
      const data = {
        text: markdown,
        title: title,
        cover_image: coverImage,
      };
      const endpoint = "http://127.0.0.1:8000/api/v1/posts/create/";
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImptYW1hMDIxQHN0dWRlbnQud2V0aGlua2NvZGUuY28uemEiLCJpYXQiOjE2Mzk5MTI4OTIsImV4cCI6MTY0MDUxNzY5MiwianRpIjoiZjMzMDZmYzgtZTQxZi00Yjk3LWI0NWEtMGM0MTg2YzdlOTJmIiwidXNlcl9pZCI6MSwib3JpZ19pYXQiOjE2Mzk5MTI4OTJ9.tB2kEh5uHZ-5qhSqDERgwz93-l3h-Vj0_vk_eBojmxk";
      axios
        .post(endpoint, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            window.location.href = "/";
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleEditorChange = ({ html, text }: any) => {
    setMarkdown(text);
    getPostInformation();
  };

  const mdParser = new MarkdownIt();

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
            onPress={() => handlePublishPost()}
            style={[styles.loadMoreBtn, publishBtnBGColour]}
            disabled={publishBtnDisabled}
          >
            <Text style={styles.loadMoreBtnText}>publish</Text>
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
});
export default CreatePost;
