import { view } from "@risingstack/react-easy-state";

import ReactCardFlip from "react-card-flip";
import { View } from "react-native";

import { userAuth } from "../../store";

import Page from "./Page";

const AuthForm = view((): JSX.Element => {
  return (
    <ReactCardFlip
      isFlipped={userAuth.authCardFlipped}
      flipDirection="horizontal"
    >
      <View>
        <Page view="register" isFlipped={userAuth.authCardFlipped} />
      </View>

      <View>
        <Page view="login" isFlipped={userAuth.authCardFlipped} />
      </View>
    </ReactCardFlip>
  );
});

export default AuthForm;
