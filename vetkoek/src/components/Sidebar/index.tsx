import { View } from "react-native"
import Footer from "./Footer"
import SearchForm from "./SearchForm"
import SidebarCard from "./SidebarCard"

const Sidebar = () => {
    return (
        <View>
            <SearchForm />
            <SidebarCard cardTitle="Latest stories" />
            <SidebarCard cardTitle="Discussions" />
            <SidebarCard cardTitle="Upcoming products" />
            <Footer />
        </View>
    )
}

export default Sidebar