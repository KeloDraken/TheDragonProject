import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Text, TouchableOpacity, View } from "react-native";
import { postsList } from "../../store";
import { styles } from "./style";
import Post from "./Post";

const Feed = view(() => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState([]);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [start, setStart] = useState<number>(2);

  const moreBtnBGColour = {
    backgroundColor: hasNext ? "#000" : "#50596b",
  };

  useEffect(() => {
    if (postsList.data.length === 0) {
      handlePostFetch();
    } else {
      setLoading(false);
    }
  }, []);

  const handleFetchMore = () => {
    setLoadingMore(true);
    const endpoint = `http://127.0.0.1:8000/api/v1/posts/list/?page=${start}`;
    axios.get(endpoint).then((response) => {
      const newPostList = posts.concat(response.data.results);
      if (response.data.next === null) {
        setHasNext(false);
      }
      setPosts(newPostList);
      setLoadingMore(false);
      setStart(start + 1);
    });
  };

  const handlePostFetch = (): void => {
    const endpoint = "http://127.0.0.1:8000/api/v1/posts/list/?page=1";
    axios.get(endpoint).then((response) => {
      setPosts(response.data.results);
      setLoading(false);
    });
  };

  const renderPosts = () => {
    return (
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid mt-2"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((item: object, index: number) => {
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
          <div className="loader" />
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
            <div className="loader" />
          </div>
        ) : (
          <Text style={styles.loadMoreBtnText}>Load more</Text>
        )}
      </TouchableOpacity>
    </View>
  );
});

export default Feed;
