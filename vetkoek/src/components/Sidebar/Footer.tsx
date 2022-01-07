import { View } from "react-native";
import { Link } from "react-router-dom";

import { styles } from "./style";

const Footer = (): JSX.Element => {
  return (
    <View>
      <View style={styles.footerContainer}>
        <Link
          className="mr-3 text-gray-500 text-sm hover:underline"
          to="/post/eQInw2fFV1AxKzO/"
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
      </View>
    </View>
  );
};
export default Footer;
