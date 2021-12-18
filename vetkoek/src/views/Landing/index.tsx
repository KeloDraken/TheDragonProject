import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Landing = () => {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.header}>
        <Text style={styles.logoText}>kelodraken</Text>
        <span className="material-icons-outlined text-white mt-2">close</span>
      </View>
      <Text style={styles.heroText}>You're now a part of the community!</Text>
      <Text style={styles.heroSubText}>SUGGESTED THINGS YOU CAN DO</Text>
      <TouchableOpacity style={styles.heroBtn}>
        <Text style={styles.heroBtnText}>Join the Welcome thread</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.heroBtn}>
        <Text style={styles.heroBtnText}>
          Write your first DEV Community post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.heroBtn}>
        <Text style={styles.heroBtnText}>Customise your profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;
