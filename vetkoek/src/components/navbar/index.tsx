import { View } from "react-native"
import { styles } from "./style"

const Navbar = () => {
    return (
        <View style={styles.headerContainer}>
            <a title="Search" href="/" className="material-icons px-4 py-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">search</a>
            <a href="/" className="text-sm px-4 py-1 rounded-lg font-bold text-gray-400 hover:text-white hover:bg-gray-800">Frontpage</a>
            <a href="/" className="text-sm px-4 py-1 rounded-lg font-bold text-gray-400 hover:text-white hover:bg-gray-800">Upvoted</a>
            <a href="/" className="text-sm px-4 py-1 rounded-lg font-bold text-gray-400 hover:text-white hover:bg-gray-800">Community</a>
            <a href="/" className="text-sm px-4 py-1 rounded-lg font-bold text-gray-400 hover:text-white hover:bg-gray-800">Projects</a>
        </View>
    )
}

export default Navbar