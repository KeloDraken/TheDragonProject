import { View } from "react-native";
import { Link } from "react-router-dom";
import { styles } from "./style";

const Footer = () => {
  return (
    <View>
      <View style={styles.footerContainer}>
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/rules"
        >
          Rules
        </Link>
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/privacy"
        >
          Privacy Policy
        </Link>
        <Link className="mr-3 text-gray-500 text-sm hover:underline" to="/faqs">
          FAQs
        </Link>
      </View>
      {/* <span className="ml-4 text-gray-500 text-sm mt-3 mb-8">
        © 2021 Samkelo Rocks (Pty) Ltd.
      </span> */}
    </View>
  );
};
export default Footer;
