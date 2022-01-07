import { Image, ImageBackground, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";
import za from "javascript-time-ago/locale/en-ZA.json";
import gb from "javascript-time-ago/locale/en-GB.json";

import { PostObject, UserObject } from "../../types";
import { styles } from "./style";

TimeAgo.addDefaultLocale(za);
TimeAgo.addLocale(gb);

interface AuthorHeaderProps {
  item: UserObject;
  loading: boolean | true;
  post: PostObject;
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
          <Link to={`/user/${item.object_id}/`}>
            <Text style={styles.displayName}>
              {item.display_name !== "" ? item.display_name : item.username}{" "}
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
                marginLeft: wp("2"),
                fontSize: wp("1"),
              }}
            >
              {item.bio}
            </Text>
          ) : null}
          <ReactTimeAgo
            style={{
              color: "rgba(0,0,0,0.7)",
              fontStyle: "italic",
              marginTop: wp("0.4"),
              marginBottom: wp("2"),
              marginLeft: wp("2"),
              fontSize: wp("1"),
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
