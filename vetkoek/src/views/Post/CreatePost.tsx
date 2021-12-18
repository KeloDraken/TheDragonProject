import axios from "axios";
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Text, TouchableOpacity } from "react-native";
import Navbar from "../../components/Navbar";
import { styles } from "./style";

const CreatePost = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [title, setTitle] = useState(null);
  const [publishBtnDisabled, setPublishBtnDisabled] = useState<boolean>(true);

  const publishBtnBGColour = {
    backgroundColor: publishBtnDisabled ? "#50596b" : "rgba(17, 24, 39, 1)",
  };

  useEffect(() => {
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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRpb24iLCJpYXQiOjE2Mzk4MjIyMDMsImV4cCI6MTY0MDQyNzAwMywianRpIjoiNjMwNmVkOTktZDQyZi00NGY4LTlmZWEtYWM0MTVmODc5MTJiIiwidXNlcl9pZCI6MSwib3JpZ19pYXQiOjE2Mzk4MjIyMDN9.zmyNeY-kLJzxlROQWV9MyWgDeOSPaNf4ew8m1WtSCfU";
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
          <h1 className="hidden lg:block xl:block 2xl:block text-gray-900 font-bold text-3xl">
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
};
export default CreatePost;
