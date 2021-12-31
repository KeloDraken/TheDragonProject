import { Text, View } from "react-native";
import { styles } from "./styles";

const About = () => {
  return (
    <View>
      <Text style={styles.pageHeading}>About KeloDraken</Text>
      <Text style={styles.pageContent}>
        KeloDraken is a community of software developers getting together to
        help one another out. The software industry relies on collaboration and
        networked learning. KeloDraken provides a place for that to happen.
      </Text>
      <Text style={styles.pageContent}>
        Kelodraken is open-sourced, so feel free to check out the code
        or contribute to the project on{" "}
        <a
          href="https://github.com/KeloDraken/KeloDrake/"
          target={"_blank"}
          className="underline font-bold"
          rel="noreferrer"
        >
          GitHub
        </a>
        . I hope you enjoy poking around and participating!
      </Text>
      <Text style={styles.pageContent}>
        I have an open door policy. If you discover a bug, want a feature added,
        or just want to share any feedback, please feel free to DM me on{" "}
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
