import { FC } from "react";
import { View } from "react-native";
import { UserObject } from "../../types";
import { Input } from "../Auth/FormInput";

interface EditProfileFormProps {
  user: UserObject;
  onChangeDisplayName?: (event: any) => void;
  onChangeProfilePicture?: (event: any) => void;
  onChangeCoverPicture?: (event: any) => void;
  onChangeBio?: (event: any) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const EditProfileForm: FC<EditProfileFormProps> = ({
  user,
  onSubmit,
  onCancel,
  onChangeBio,
  onChangeCoverPicture,
  onChangeDisplayName,
  onChangeProfilePicture,
}): JSX.Element => {
  return (
    <View>
      <h1 className="text-black font-bold text-2xl mb-2">Edit profile</h1>
      <Input
        placeholder="Display name"
        type="text"
        onChange={onChangeDisplayName}
        value={user.display_name}
        className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
      />

      <Input
        placeholder="Profile Picture"
        type="url"
        onChange={onChangeProfilePicture}
        className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
      />

      <Input
        placeholder="Cover image"
        type="url"
        onChange={onChangeCoverPicture}
        className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
      />

      <Input
        placeholder="Bio"
        type="text"
        onChange={onChangeBio}
        className="bg-gray-200 px-5 w-full py-3 text-black mt-1 mb-2 placeholder-black rounded"
      />

      <div className="flex mt-4 flex-row">
        <button
          onClick={onCancel}
          className="bg-white text-gray-600 w-1/4 px-5 py-3 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="bg-black text-white w-4/5 px-5 py-3 font-bold rounded"
        >
          Save changes
        </button>
      </div>
    </View>
  );
};
export default EditProfileForm;
