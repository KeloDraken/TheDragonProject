import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
import SidebarCard from "./SidebarCard";

import { recommendedPostsList } from "../../store";

const Sidebar = view(() => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetRecommended = () => {
    const endpoint = "http://127.0.0.1:8000/api/v1/posts/get/recommended/";

    axios.get(endpoint).then((response) => {
      recommendedPostsList.data = response.data.results;
      setLoading(false);
    });
  };

  useEffect(() => {
    if (recommendedPostsList.data.length === 0) {
      handleGetRecommended();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <SearchForm />
      <SidebarCard
        loading={loading}
        posts={recommendedPostsList.data}
        cardTitle="Trending now"
      />
      <SidebarCard
        loading={loading}
        posts={recommendedPostsList.data}
        cardTitle="kelodraken updates"
      />
      <Footer />
    </View>
  );
});

export default Sidebar;
