import { Text } from "react-native";
import { styles } from "../style";

const Logo = () => {
  return (
    <span className="hidden mt-2 pl-6 md:block lg:block xl:block 2xl:block">
      <a title="Ett projekt av Samkelo Drackner" href="/">
        <Text style={styles.logoText}>kelodraken</Text>
      </a>
    </span>
  );
};
export default Logo;
