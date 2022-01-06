import axios from "axios";
import { debounce } from "lodash";

import { useState } from "react";
import { View, TextInput, ActivityIndicator } from "react-native";
import { Link } from "react-router-dom";

import { PostObject } from "../../types";
import { styles } from "./style";

let debouncedFunction: any;

const SearchForm = (): JSX.Element => {
  const [searching, setSearching] = useState<boolean>(false);
  const [queryLoading, setQueryLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Array<PostObject>>([]);

  const resultsContainerStyles = !searching ? "hidden" : "block";

  const onSearchChange = (text: string) => {
    try {
      setQueryLoading(true);
      /**
       * cancel old saved debounced functions
       */
      if (text.length === 0) {
        setQueryLoading(false);
        setSearching(false);
        return;
      }
      setSearching(true);
      if (debouncedFunction && debouncedFunction.cancel)
        debouncedFunction.cancel();

      debouncedFunction = debounce(async () => {
        // use event value if you want in request
        const response: any = await axios.get(
          `http://api.localhost:8000/v1/search/?q=${text}`
        );

        if (response.data) {
          setResults(response.data.results);
          setQueryLoading(false);
        }
      }, 500);
      debouncedFunction();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnBlur = () => {
    if (results.length > 0) {
    setSearching(false);
    }
    setSearching(true);
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
          placeholder="Search kelodraken"
          placeholderTextColor={"#000"}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => handleOnBlur()}
          onFocus={() => setSearching(true)}
          autoComplete="off"
          onChangeText={(text) => onSearchChange(text)}
        />
        <div
          className={`resultsBackgroundColour ${resultsContainerStyles} rounded mt-2 shadow-md`}
          id="searchResults"
        >
          {queryLoading || results.length === 0 ? (
            <div className="flex py-20 justify-center self-center align-center">
              <ActivityIndicator color={"#000"} size={30} />
            </div>
          ) : (
            results.map((item: PostObject, index: number): JSX.Element => {
              return (
                <Link key={index} to={`/post/${item.object_id}/`}>
                  <p className="hover:bg-gray-400 py-3 px-5 font-bold text-lg">
                    {item.title}
                  </p>
                </Link>
              );
            })
          )}
        </div>
      </View>
    </View>
  );
};

export default SearchForm;
