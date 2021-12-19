import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  const [posts, setPost] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetRecommended = () => {
    const endpoint = "http://127.0.0.1:8000/api/v1/posts/get/recommended/";

    axios.get(endpoint).then((response) => {
      setPost(response.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetRecommended();
  }, []);

  return (
    <View>
      <SearchForm />
      <SidebarCard loading={loading} posts={posts} cardTitle="For you" />
      <Footer />
    </View>
  );
};

export default Sidebar;
