import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
import SidebarCard from "./SidebarCard";

import { recommendedPostsList, updatesList } from "../../store";
import UpdatesCard from "./UpdatesCard";

const Sidebar = view(() => {
  const [loadingRecommended, setRecommendedLoading] = useState<boolean>(true);
  const [loadingUpdates, setUpdatesLoading] = useState<boolean>(true);

  const handleGetRecommended = () => {
    const endpoint = "http://127.0.0.1:8000/api/v1/posts/get/recommended/";

    axios.get(endpoint).then((response) => {
      recommendedPostsList.data = response.data.results;
      setRecommendedLoading(false);
    });
  };

  const handleGetUpdates = () => {
    const endpoint = "http://127.0.0.1:8000/api/v1/core/updates/";

    axios.get(endpoint).then((response) => {
      updatesList.data = response.data.results;
      setUpdatesLoading(false);
    });
  };

  useEffect(() => {
    if (
      recommendedPostsList.data.length === 0 ||
      updatesList.data.length === 0
    ) {
      handleGetRecommended();
      handleGetUpdates();
    } else {
      setRecommendedLoading(false);
      setUpdatesLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <SearchForm />
      <SidebarCard
        loading={loadingRecommended}
        posts={recommendedPostsList.data}
        cardTitle="Trending now"
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

export default Sidebar;
