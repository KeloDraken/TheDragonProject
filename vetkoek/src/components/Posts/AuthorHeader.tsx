import { Image, ImageBackground, Text, View } from "react-native";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
import { widthPercentageToDP } from "react-native-responsive-screen";

import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";
import TimeAgo from "javascript-time-ago";

import { PostObject, UserObject } from "../../types";
import { styles } from "./style";

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

interface AuthorHeaderProps {
  item: UserObject;
  post: PostObject;
  loading: boolean | true;
}

const AuthorHeader: React.FC<AuthorHeaderProps> = ({
  item,
  post,
  loading,
}): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      {!loading ? (
        <View>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: item.cover_pic }}
            style={styles.coverImage}
          >
            <Image
              source={{ uri: item.profile_pic }}
              resizeMethod="resize"
              style={styles.profileImage}
            />
          </ImageBackground>
          <View style={styles.editProfileContainer}>
            <View style={styles.empty} />
          </View>
          <Link title={item.username} to={`/user/${item.object_id}/`}>
            <Text style={styles.displayName}>
              {item.display_name}{" "}
              {item.is_verified ? (
                <span
                  title="creator of kelodraken"
                  className="cursor-pointer text-base material-icons-outlined"
                >
                  verified
                </span>
              ) : null}
            </Text>
          </Link>
          {item.bio !== null && item.bio !== undefined && item.bio !== "" ? (
            <Text
              style={{
                color: "rgba(0,0,0,0.7)",
                fontWeight: "600",
                marginLeft: widthPercentageToDP("2"),
                fontSize: widthPercentageToDP("1"),
              }}
            >
              {item.bio}
            </Text>
          ) : null}
          <ReactTimeAgo
            style={{
              color: "rgba(0,0,0,0.7)",
              fontStyle: "italic",
              marginTop: widthPercentageToDP("0.4"),
              marginBottom: widthPercentageToDP("2"),
              marginLeft: widthPercentageToDP("2"),
              fontSize: widthPercentageToDP("1"),
            }}
            date={Date.parse(post.datetime_created)}
          />
        </View>
      ) : (
        <View>
          <View style={styles.coverImage}>
            <View style={styles.profileImage} />
          </View>
          <View style={styles.editProfileContainer}>
            <View style={styles.empty} />
          </View>
        </View>
      )}
    </View>
  );
};

export default AuthorHeader;
