import axios from "axios";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import { PostObject } from "../../types";

import Post from "./Post";
import { styles } from "./style";

const Feed = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [hasNext, setHasNext] = useState<boolean>(false);
  const [start, setStart] = useState<number>(2);

  const [postsList, setPosts] = useState<Array<PostObject>>([]);

  const moreBtnBGColour: object = {
    backgroundColor: hasNext ? "#000" : "#50596b",
  };

  const handlePostFetch = (): void => {
    const endpoint: string = `${process.env.API_HOST_NAME}/v1/posts/list/?page=1`;

    axios.get(endpoint).then((response): void => {
      if (response.data.next === null) {
        setHasNext(false);
      } else {
        setHasNext(true);
      }
      setPosts(response.data.results);
      setLoading(false);
    });
  };

  const handleFetchMore = (): void => {
    setLoadingMore(true);

    const endpoint: string = `${process.env.API_HOST_NAME}/v1/posts/list/?page=${start}`;

    axios.get(endpoint).then((response): void => {
      const newPostList: PostObject[] = postsList.concat(response.data.results);
      if (response.data.next !== null) {
        setHasNext(true);
      } else {
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

  const renderPosts = (): JSX.Element => {
    return (
      <Masonry
        breakpointCols={1}
        className="my-masonry-grid mt-2"
        columnClassName="my-masonry-grid_column"
      >
        {postsList.map((item: PostObject, index: number): JSX.Element => {
          return <Post key={index} item={item} />;
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
      {hasNext ? (
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
      ) : null}
    </View>
  );
};

export default Feed;
