import { view } from "@risingstack/react-easy-state";

import { useState } from "react";
import { TextInput, View } from "react-native";

import { postTags } from "../../store";
import { styles } from "./style";

const AddTags = view((): JSX.Element => {
  const [tags, setTags] = useState<string>("");

  const handleTags = (text: string): void => {
    setTags(text);
    postTags.tags = tags;
  };

  return (
    <div className="w-full text-center justify-center mx-auto px-44">
      <h1 className="text-2xl text-center mt-16 mb-5 text-black font-bold">
        Separate tags using commas
      </h1>
      <small className="text-black">
        <span className="font-bold">your tags: </span>
        {postTags.tags.replaceAll(",", " ")}
      </small>
      <div className="flex justify-center mt-4 mb-10">
        <View style={styles.searchForm}>
          <View style={styles.searchIconContainer}>
            <i className="p-1 focus:outline-none text-black focus:shadow-outline material-icons-outlined">
              tag
            </i>
          </View>
          <TextInput
            style={styles.tagsTextInput}
            placeholder="Your post's tags"
            placeholderTextColor={"#000"}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(tags) => handleTags(tags)}
          />
        </View>
      </div>
    </div>
  );
});

export default AddTags;
