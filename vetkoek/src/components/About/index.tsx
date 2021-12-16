import { Text, View } from "react-native";
import { styles } from "./styles";

const About = () => {
  return (
    <View>
      <Text style={styles.pageHeading}>About KeloDraken</Text>
      <Text style={styles.pageContent}>
        KeloDraken is a community of software developers getting together to help one
        another out. The software industry relies on collaboration and networked
        learning. We provide a place for that to happen.
      </Text>
      <Text style={styles.pageContent}>
        KeloDraken is built on Forem: open source software designed to empower
        communities. Because our application is open source, you can inspect
        every little detail of the code, or chip in yourself! Forem is available
        for anyone interested in creating similar communities in any niche or
        passion. Visit our meta Forem, forem.dev for more information.
      </Text>
      <Text style={styles.pageContent}>
        We believe in transparency and adding value to the ecosystem. We hope
        you enjoy poking around and participating!
      </Text>
      <Text style={styles.pageContent}>
        Our team is distributed around the world. We have no office, but we come
        together online each day to build community and improve the software
        careers of millions.
      </Text>
      <Text style={styles.pageContent}>Happy coding ❤️</Text>
    </View>
  );
};

export default About;
