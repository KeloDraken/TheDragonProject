import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { View } from "react-native";

import Login from "./Login";
import Register from "./Register";

const AuthForm = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <View>
        <Register isFlipped={isFlipped} />
        <button onClick={() => setIsFlipped(true)}>Click to flip</button>
      </View>

      <View>
        <Login isFlipped={isFlipped} />
        <button onClick={() => setIsFlipped(false)}>Click to flip</button>
      </View>
    </ReactCardFlip>
  );
};

export default AuthForm;
