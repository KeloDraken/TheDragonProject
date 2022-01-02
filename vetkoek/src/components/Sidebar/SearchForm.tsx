import axios from "axios";
import { debounce } from "lodash";

import { useState } from "react";
import { View, TextInput } from "react-native";

import { styles } from "./style";

let debouncedFunction: any;

const SearchForm = (): JSX.Element => {
  const [, setSearchQuery] = useState<string>("");

  const onSearchChange = (text: string) => {
    try {
      setSearchQuery(text);
      /**
       * cancel old saved debounced functions
       */
      if (text.length === 0) return;
      if (debouncedFunction && debouncedFunction.cancel)
        debouncedFunction.cancel();

      debouncedFunction = debounce(async () => {
        // use event value if you want in request
        const response: any = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/1?test=${text}`
        );

        if (response.data) {
          console.log("autocomplete results...");
        }
      }, 2000);
      debouncedFunction();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.sidebarSearchFormContainer}>
      <View style={styles.searchForm}>
        <View style={styles.searchIconContainer}>
          <i className="p-1 focus:outline-none text-black focus:shadow-outline material-icons-outlined">
            search
          </i>
        </View>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search KeloDraken"
          placeholderTextColor={"#000"}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          onChangeText={(text) => onSearchChange(text)}
        />
      </View>
    </View>
  );
};

export default SearchForm;
