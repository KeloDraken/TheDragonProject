import { View } from "react-native"

import { styles } from "./style"

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <a href="/" title="Ett projekt av Samkelo Drakensberg" className="text-lg">KeloDraken</a>
            <View style={styles.iconGroup}>
                <a title="Bookmarks" href="#" className=" px-4 py-1 rounded-lg hover:bg-gray-800 material-icons text-normal text-gray-400 hover:text-white">bookmark</a>
                <a title="Dashboard" href="#" className="px-4 py-1 mr-2 rounded-lg hover:bg-gray-800 material-icons text-normal text-gray-400 hover:text-white">dashboard</a>
                <a title="Create a Matstad account" href="#" className="bg-white text-black text-sm rounded-xl font-extrabold px-4 py-2">Sign in</a>
            </View>
        </View>

    )
}

export default Header