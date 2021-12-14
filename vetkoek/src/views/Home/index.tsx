import { View } from "react-native";

import Card from "../../components/card";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const HomeView = () => {
    return (
        <View>
            <Header />
            <Navbar />
            <Card />
        </View>
    )
}
export default HomeView;