import axios from "axios";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import Post from "./Post";

const Feed = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [hasNext, setHasNext] = useState<boolean>(true);
  const [start, setStart] = useState<number>(2);

  const [postsList, setPosts] = useState<Array<object>>([]);

  const moreBtnBGColour = {
    backgroundColor: hasNext ? "#000" : "#50596b",
  };

  const handleFetchMore = (): void => {
    setLoadingMore(true);

    const endpoint = `http://127.0.0.1:8000/api/v1/posts/list/?page=${start}`;

    axios.get(endpoint).then((response): void => {
      const newPostList = postsList.concat(response.data.results);
      if (response.data.next === null) {
        setHasNext(false);
      }
      setPosts(newPostList);
      setLoadingMore(false);
      setStart(start + 1);
    });
  };

  useEffect((): void => {
    handlePostFetch();
  }, []);

  const handlePostFetch = (): void => {
    const endpoint = "http://127.0.0.1:8000/api/v1/posts/list/?page=1";

    axios.get(endpoint).then((response): void => {
      setPosts(response.data.results);
      setLoading(false);
    });
  };

  const renderPosts = (): JSX.Element => {
    return (
      <Masonry
        breakpointCols={1}
        className="my-masonry-grid mt-2"
        columnClassName="my-masonry-grid_column"
      >
        {postsList.map((item: object, index: number): JSX.Element => {
          return (
            <View key={index}>
              <Post item={item} />
            </View>
          );
        })}
      </Masonry>
    );
  };

  return (
    <View>
      {loading ? (
        <div className="flex h-screen justify-center self-center align-center">
          <ActivityIndicator color={"#000"} size={36} />
        </div>
      ) : (
        renderPosts()
      )}
      <TouchableOpacity
        onPress={() => handleFetchMore()}
        style={[styles.loadMoreBtn, moreBtnBGColour]}
        disabled={!hasNext}
      >
        {loadingMore ? (
          <div className="flex justify-center self-center align-center">
            <ActivityIndicator color={"#fff"} size={30} />
          </div>
        ) : (
          <Text style={styles.loadMoreBtnText}>Load more</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
