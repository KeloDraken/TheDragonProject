import { View, Image, Text } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "./style"
import "./style.css"

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Link title="Ett projekt av Samkelo Drackner" to="/" className="flex">
                <Image source={{ uri: "https://i.imgur.com/yk842xK.png" }} style={styles.logoPNG} />
                <Text style={styles.logoText}>KeloDraken</Text>
            </Link>
        </View>
    )
}
export default Logo