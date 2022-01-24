import { Text, View } from "react-native";
import { styles } from "./styles";

const PageNotFound = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.pageHeading}>Page not found</Text>
      <Text style={styles.pageContent}>
        The page you're looking for does not exist. You may have followed a
        broken link, typed in an incorrect url, or you don't have permission to
        view this page.
      </Text>
      <Text style={styles.pageContent}>
        If you think this is a bug DM me on{" "}
        <a
          href="https://instagram.com/KeloDraken/"
          target={"_blank"}
          className="underline font-bold"
          rel="noreferrer"
        >
          Instagram
        </a>{" "}
        or{" "}
        <a
          href="https://twitter.com/KeloDraken/"
          target={"_blank"}
          className="underline font-bold"
          rel="noreferrer"
        >
          Twitter
        </a>
        .
      </Text>
      <Text style={styles.pageContent}>Happy coding ❤️</Text>
    </View>
  );
};

export default PageNotFound;
