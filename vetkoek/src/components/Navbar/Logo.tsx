import { View, Image, Text } from "react-native";
import { styles } from "../style";

const Logo = () => {
  return (
    <span className="hidden md:block lg:block xl:block 2xl:block">
      <View style={styles.logoContainer}>
        <a title="Ett projekt av Samkelo Drackner" href="/" className="flex">
          <Image
            source={{ uri: "https://i.imgur.com/YVvcEZT.png" }}
            style={styles.logoPNG}
          />
          <Text style={styles.logoText}>RUNE</Text>
        </a>
      </View>
    </span>
  );
};
export default Logo;
