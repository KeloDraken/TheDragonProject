import axios from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { View } from "react-native";
import { UserObject } from "../../types";

interface FormInputProps {
  item: UserObject;
  onCancel: () => void;
}

const FormInputs: FC<FormInputProps> = ({ item, onCancel }): JSX.Element => {
  const [displayName, setDisplayName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [cookies] = useCookies();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setLoading(true);
    const data: UserObject = {
      bio: bio !== "" ? bio : item.bio,
      cover_pic: coverImage !== "" ? coverImage : item.cover_pic,
      display_name: displayName !== "" ? displayName : item.display_name,
      profile_pic: profileImage !== "" ? profileImage : item.profile_pic,
    };

    let token: string = cookies.UIDT;

    const endpoint = "http://api.localhost:8000/v1/users/update/";

    axios
      .patch(endpoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response): void => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleSetDisplayName = (event: ChangeEvent<HTMLInputElement>): void => {
    setDisplayName(event.target.value);
  };

  const handleSetBio = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setBio(event.target.value);
  };

  const handleSetProfilePicture = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setProfileImage(event.target.value);
  };

  const handleSetCoverImage = (event: ChangeEvent<HTMLInputElement>): void => {
    setCoverImage(event.target.value);
  };

  const handleCancel = (): void => {
    setDisplayName("");
    setBio("");
    setCoverImage("");
    setProfileImage("");
    if (onCancel !== undefined) {
      onCancel();
    }
  };

  return (
    <View>
      <h1 className="text-black font-bold text-2xl mb-2">Edit profile</h1>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <input
          placeholder="Display name"
          type="text"
          maxLength={100}
          onChange={(event) => handleSetDisplayName(event)}
          className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
        />

        <input
          placeholder="Profile Picture"
          type="url"
          maxLength={3000}
          onChange={(event) => handleSetProfilePicture(event)}
          className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
        />

        <input
          placeholder="Cover image"
          type="url"
          maxLength={3000}
          onChange={(event) => handleSetCoverImage(event)}
          className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
        />

        <textarea
          placeholder="Bio"
          maxLength={300}
          onChange={(event) => handleSetBio(event)}
          className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
        />

        <div className="flex mt-4 flex-row">
          <button
            type="button"
            onClick={() => handleCancel()}
            className="bg-white text-gray-600 w-1/4 px-5 py-3 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white w-4/5 px-5 py-3 font-bold rounded"
          >
            Save changes
          </button>
        </div>
      </form>
    </View>
  );
};
export default FormInputs;
