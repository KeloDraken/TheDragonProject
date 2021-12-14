import { View } from "react-native";

import Card from "../../components/card";
import SearchForm from "../../components/search";

const SearchView = () => {
    return (
        <View>
            <SearchForm />
            <Card />
        </View>
    )
}
export default SearchView;