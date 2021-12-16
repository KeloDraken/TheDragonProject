import { View, Image, Text } from "react-native"
import { Link } from "react-router-dom"
import { styles } from "../style"

const Logo = () => {
    return (
        <span className="hidden md:block lg:block xl:block 2xl:block">
            <View style={styles.logoContainer}>
                <Link title="Ett projekt av Samkelo Drackner" to="/" className="flex">
                    <Image source={{ uri: "https://i.imgur.com/yk842xK.png" }} style={styles.logoPNG} />
                    <Text style={styles.logoText}>wtc24</Text>
                </Link>
            </View>
        </span>
    )
}
export default Logo