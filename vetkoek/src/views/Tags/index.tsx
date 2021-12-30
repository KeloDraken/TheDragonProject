import Masonry from "react-masonry-css";
import { Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { styles } from "./style";

const Tags = () => {
  const data = [
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
    "Tag Name",
  ];
  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item: string, index: number)=>{
            return (
              <View key={index} style={styles.tag}>
                <Text>{item}</Text>
              </View>
            )
          })}
        </Masonry>
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
};
export default Tags;
