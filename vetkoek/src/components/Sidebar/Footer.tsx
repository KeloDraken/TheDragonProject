import { View } from "react-native";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <View>
      <div className="ml-5 mt-3">
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/post/mdCbCegZJo99qki/"
        >
          Code of Conduct
        </Link>
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/about/"
        >
          About
        </Link>
      </div>
      <div className="ml-5 mb-5 mt-3">
        <a
          href="https://instagram.com/KeloDraken/"
          className="mr-3 text-gray-500 text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/intent/follow?screen_name=KeloDraken&tw_p=followbutton"
          className="mr-3 text-gray-500 text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
      <hr className="mx-4" />
      <div className="ml-5 mt-3 mb-10">
        <p className="text-black text-sm mt-3 font-bold">Drakenprojektet</p>
        <a
          href="https://matstad.kelodraken.com/"
          className="mr-3 text-gray-500 text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Matstad
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.ndlovukazi"
          className="mr-3 text-gray-500 text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Sága
        </a>
      </div>
    </View>
  );
};
export default Footer;
