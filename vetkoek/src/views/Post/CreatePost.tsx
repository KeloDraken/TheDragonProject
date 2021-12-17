import MarkdownIt from "markdown-it";
import { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Navbar from "../../components/Navbar";

const CreatePost = () => {
  const [markdown, setMarkdown] = useState<string>("");

  const handlePublishPost = () => {
    console.log(markdown);
  };
  const handleEditorChange = ({ html, text }: any) => {
    setMarkdown(text);
  };
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-1/4">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        <div className="flex justify-between py-2 border-l border-gray-300 px-3">
          <h1 className="hidden lg:block xl:block 2xl:block text-gray-900 font-bold text-3xl">
            Share your insights...
          </h1>
          <button
            onClick={() => handlePublishPost()}
            className="bg-gray-900 px-3 pb-2 pt-1 text-2xl font-bold text-white rounded-3xl"
          >
            publish
          </button>
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
