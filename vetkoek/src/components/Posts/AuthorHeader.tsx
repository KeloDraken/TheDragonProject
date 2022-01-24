import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Image, ImageBackground, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import ReactTimeAgo from "react-time-ago";

import { PostObject, UserObject } from "../../types";
import { styles } from "./style";

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
  const [reportResponse, setReportResponse] = useState<string>("");
  const [cookies] = useCookies();

  const handleReportPost = (): void => {
    const endpoint: string = `${process.env.REACT_APP_API_HOST_NAME}/v1/posts/report/${post.object_id}/`;
    const token: string = `Bearer ${cookies.UIDT}`;

    const data: object = {
      text: "this is a test",
    };

    axios
      .post(endpoint, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((): void => {
        setReportResponse(
          "You report has been submitted and will be reviewed soon."
        );
      })
      .catch((): void => {
        setReportResponse(
          "A problem occurred which prevented the submission of your report. Please try again later"
        );
      });
  };

  useEffect((): void => {
    if (reportResponse !== "") {
      setTimeout((): void => {
        setReportResponse("");
      }, 5000);
    }
  }, [reportResponse]);

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
          {item.bio !== null && item.bio !== undefined && item.bio !== "" ? (
            <Text
              style={{
                color: "rgba(0,0,0,0.7)",
                fontWeight: "600",
                // marginLeft: wp("2"),
                fontSize: wp("1"),
              }}
            >
              {item.bio}
            </Text>
          ) : null}

          {reportResponse === "" ? (
            <ReactTimeAgo
              style={{
                color: "rgba(0,0,0,0.7)",
                fontStyle: "italic",
                marginTop: wp("0.4"),
                // marginLeft: wp("2"),
                fontSize: wp("1"),
              }}
              date={Date.parse(post.datetime_created)}
            />
          ) : (
            <Text
              style={{
                color: "rgba(0,0,0,0.7)",
                fontStyle: "italic",
                marginTop: wp("0.4"),
                // marginLeft: wp("2"),
                fontSize: wp("1"),
              }}
            >
              {reportResponse}
            </Text>
          )}
          <div className="flex flex-row mt-2 ">
            <span
              onClick={handleReportPost}
              title="Report post"
              className="cursor-pointer text-xl text-gray-500 mr-2 material-icons-outlined"
            >
              report
            </span>
            <span
              title={post.tags.replaceAll(",", ", ")}
              className="cursor-pointer text-xl text-gray-500 mr-2 material-icons-outlined"
            >
              topic
            </span>
          </div>
          <hr className="mr-4 mt-3 mb-5" />
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
