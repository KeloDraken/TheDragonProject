import { View, Text } from "react-native";
import { styles } from "../style";

const Logo = () => {
  return (
    <span className="hidden pl-6 md:block lg:block xl:block 2xl:block">
      <View style={styles.logoContainer}>
        <a title="Ett projekt av Samkelo Drackner" href="/">
          <Text style={styles.logoText}>kelodraken</Text>
        </a>
      </View>
    </span>
  );
};
export default Logo;
