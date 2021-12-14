import { View, TextInput } from "react-native"
import { styles } from "./style"

const SearchForm = () => {
    return (
        <View style={styles.sidebarSearchFormContainer}>
            <View style={styles.searchForm}>
                <View style={styles.searchIconContainer}>
                    <i className="p-1 focus:outline-none focus:shadow-outline material-icons-outlined">
                        search
                    </i>
                </View>
                <TextInput style={styles.searchTextInput} placeholder="Search..." autoComplete="off" />
            </View>
        </View>
    )
}

export default SearchForm