import { view } from "@risingstack/react-easy-state";
import ReactCardFlip from "react-card-flip";
import { View } from "react-native";
import { userAuth } from "../../store";

import Login from "./Login";
import Register from "./Register";

const AuthForm = view(() => {
  return (
    <ReactCardFlip
      isFlipped={userAuth.authCardFlipped}
      flipDirection="horizontal"
    >
      <View>
        <Register isFlipped={userAuth.authCardFlipped} />
      </View>

      <View>
        <Login isFlipped={userAuth.authCardFlipped} />
      </View>
    </ReactCardFlip>
  );
});

export default AuthForm;
