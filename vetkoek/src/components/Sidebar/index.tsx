import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { useEffect, useState } from "react";
import { View } from "react-native";

import { recommendedPostsList, updatesList } from "../../store";

import Footer from "./Footer";
import SearchForm from "./SearchForm";
import SidebarCard from "./SidebarCard";
import UpdatesCard from "./UpdatesCard";

interface SidebarProps {
  viewPost?: boolean;
}

const Sidebar: React.FC<SidebarProps> = view(({ viewPost }): JSX.Element => {
  const [loadingRecommended, setRecommendedLoading] = useState<boolean>(true);
  const [loadingUpdates, setUpdatesLoading] = useState<boolean>(true);

  if (viewPost === undefined) {
    viewPost = false;
  }

  const handleGetRecommended = (): void => {
    const endpoint: string =
    `${process.env.REACT_APP_API_HOST_NAME}/v1/posts/get/recommended/`;

    axios.get(endpoint).then((response): void => {
      recommendedPostsList.data = response.data.results;
      setRecommendedLoading(false);
    });
  };

  const handleGetUpdates = (): void => {
    const endpoint: string = `${process.env.REACT_APP_API_HOST_NAME}/v1/core/updates/`;

    axios.get(endpoint).then((response): void => {
      updatesList.data = response.data.results;
      setUpdatesLoading(false);
    });
  };

  useEffect((): void => {
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
  }, []);

  return (
    <View>
      {!viewPost ? <SearchForm /> : null}
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
