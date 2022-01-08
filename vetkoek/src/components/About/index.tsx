import { Text, View } from "react-native";
import { styles } from "./styles";

const About = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.pageHeading}>About kelodraken</Text>
      <Text style={styles.pageContent}>
        kelodraken is a community of software developers getting together to
        help one another out. The software industry relies on collaboration and
        networked learning. kelodraken provides a place for that to happen.
      </Text>
      <Text style={styles.pageContent}>
        If you discover a bug, want a feature added, or just want to share any
        feedback, feel free to DM me on{" "}
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

export default About;
