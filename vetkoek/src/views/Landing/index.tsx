import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-dom";
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
      <Link title="Create your free account" to="/accounts/register/">
        <View style={styles.heroBtn}>
          <Text style={styles.heroBtnText}>Join the Welcome thread</Text>
        </View>
      </Link>
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
