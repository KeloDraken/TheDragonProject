import { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from "react-native";

import { UserObject } from "../../types";
import FormInputs from "./EditProfileFormInputs";

import { styles } from "./styles";

interface ProfileHeaderProps {
  object_id: string;
  item: UserObject;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  object_id,
  item,
}): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const EditProfileModal = (): JSX.Element => {
    return (
      <Modal
        onRequestClose={() => setIsVisible(false)}
        transparent
        visible={isVisible}
      >
        <View style={styles.containeralt}>
          <FormInputs onCancel={() => setIsVisible(false)} item={item} />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.headerContainer}>
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
        {object_id !== "" &&
        object_id !== undefined &&
        object_id !== null &&
        object_id === item.object_id ? (
          <View>
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              style={styles.editProfileBtn}
            >
              <Text style={styles.editProfileBtnText}>Edit profile</Text>
            </TouchableOpacity>
            <EditProfileModal />
          </View>
        ) : null}
      </View>
      <Text style={styles.displayName}>
        {item.display_name !== "" ? item.display_name : item.username}{" "}
        {item.is_verified ? (
          <span
            title="creator of kelodraken"
            className="cursor-pointer text-lg material-icons-outlined"
          >
            verified
          </span>
        ) : null}
      </Text>
      <Text style={styles.username}>{item.bio}</Text>
    </View>
  );
};

export default ProfileHeader;
