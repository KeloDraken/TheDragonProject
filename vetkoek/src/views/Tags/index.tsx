import axios from "axios";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { TagObject } from "../../types";

import { styles } from "./style";

const Tags = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [hasNext, setHasNext] = useState<boolean>(true);
  const [start, setStart] = useState<number>(2);

  const [tags, setTags] = useState<Array<TagObject>>([]);

  const moreBtnBGColour: object = {
    backgroundColor: hasNext ? "#000" : "#50596b",
  };

  const handleTagFetch = (): void => {
    const endpoint: string = `http://127.0.0.1:8000/api/v1/posts/tags/list/?page=1`;

    axios.get(endpoint).then((response): void => {
      setTags(response.data.results);
      setLoading(false);
    });
  };

  const handleFetchMore = (): void => {
    setLoadingMore(true);
    const endpoint: string = `http://127.0.0.1:8000/api/v1/posts/tags/list/?page=${start}`;

    axios.get(endpoint).then((response): void => {
      if (response.data.next === null) {
        setHasNext(false);
      }
      setTags(response.data.results);
      setLoadingMore(false);
      setStart(start + 1);
    });
  };

  const renderTags = (): JSX.Element => {
    return (
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {tags.map((item: TagObject, index: number): JSX.Element => {
          return (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagName}>{item.name}</Text>
            </View>
          );
        })}
      </Masonry>
    );
  };

  useEffect((): void => {
    handleTagFetch();
  }, []);

  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen pr-3 sticky top-0">
        <View style={styles.pageHeadingContainer}>
          <Text style={styles.pageHeading}>Explore topics</Text>
        </View>
        <View>
          {loading ? (
            <div className="flex h-screen justify-center self-center align-center">
              <ActivityIndicator color={"#000"} size={36} />
            </div>
          ) : (
            renderTags()
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
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
};
export default Tags;
