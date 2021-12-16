import { Text } from "react-native";
import Post from "../../components/Feed/Post";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { styles } from "./style";

const HomeView = () => {
    return (
        <div className="flex">
            <aside className="pl-7 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5 border-r border-gray-700">
                <Navbar />
            </aside>

            <main className="w-full overflow-y-scroll h-screen sticky top-0">
                <div className="flex bg-black w-full py-3 px-4 border-b border-r border-gray-700">
                    <Text style={styles.pageHeading}>Home</Text>
                </div>
                <div className="border-r  border-gray-700">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </main>

            <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 border-l pr-7 pl-3 border-gray-700">
                <Sidebar />
            </aside>
        </div>
    )
}
export default HomeView;