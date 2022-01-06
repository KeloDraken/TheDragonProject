import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { useParams } from "react-router-dom";

import { updatesList } from "../../store";
import { PostObject } from "../../types";

import Footer from "./Footer";
import SidebarCard from "./SidebarCard";
import UpdatesCard from "./UpdatesCard";

const ViewPostSidebar = view((): JSX.Element => {
  const [similarPosts, setSimilarPosts] = useState<Array<PostObject>>([]);
  const [loadingRecommended, setRecommendedLoading] = useState<boolean>(true);
  const [loadingUpdates, setUpdatesLoading] = useState<boolean>(true);

  let { id } = useParams();

  const handleGetUpdates = (): void => {
    const endpoint: string = "http://api.localhost:8000/v1/core/updates/";

    axios.get(endpoint).then((response): void => {
      updatesList.data = response.data.results;
      setUpdatesLoading(false);
    });
  };

  useEffect((): void => {
    if (updatesList.data.length === 0) {
      handleGetUpdates();
    } else {
      setRecommendedLoading(false);
      setUpdatesLoading(false);
    }

    const endpoint: string = `http://api.localhost:8000/v1/posts/get/similar/${id}/`;

    axios.get(endpoint).then((response): void => {
      setSimilarPosts(response.data.results);
      setRecommendedLoading(false);
    });
  }, [id]);

  return (
    <View>
      <SidebarCard
        loading={loadingRecommended}
        posts={similarPosts}
        cardTitle="Read next"
      />
      <UpdatesCard
        loading={loadingUpdates}
        posts={updatesList.data}
        cardTitle="kelodraken updates"
      />
      <Footer />
    </View>
  );
});

export default ViewPostSidebar;
