import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, View } from "react-native";
import { styles } from "./style";

interface LoginProps {
  isFlipped: boolean;
}

const Login: React.FC<LoginProps> = ({ isFlipped }) => {
  const [view] = useState<string>("login");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<Array<string>>([""]);
  const [, setIsLoading] = useState<boolean>(false);
  const [emailEntryError, setEmailEntryError] = useState<boolean>(false);
  const [passwordEntryError, setPasswordEntryError] = useState<boolean>(false);

  const [, setCookie] = useCookies(["UIDT"]);

  useEffect(() => {
    setUsername("");
    setPassword("");
    setErrorMessage([""]);
    setIsLoading(false);
    setEmailEntryError(false);
    setPasswordEntryError(false);
  }, [isFlipped]);

  const check_email = (email: string) => {
    let regex = /[a-zA-Z0-9_.+-]+@student.wethinkcode.co.za+/gm;
    if (regex.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const setUserToken = (token: any) => {
    setCookie("UIDT", token, {
      path: "/",
      maxAge: 2628000,
    });
    window.location.replace("/");
  };

  const handleSubmit = () => {
    const endpoint =
      view === "login"
        ? "http://127.0.0.1:8000/api/v1/users/login/"
        : "http://127.0.0.1:8000/api/v1/users/register/";
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(endpoint, data)
      .then((response) => {
        if (response.data.status_code === 422) {
          setErrorMessage([response.data.message]);
          setIsLoading(false);
        } else if (response.data.status_code === 423) {
          setErrorMessage([response.data.message]);
          setIsLoading(false);
        } else {
          setUserToken(response.data.token);
        }
      })
      // console.log(response.data)
      .catch(() => {
        if (view === "login") {
          setErrorMessage(["Incorrect log in credentials"]);
        } else {
          setErrorMessage(["Bad request"]);
        }
        setIsLoading(false);
      });
  };

  const handleSetUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSetPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleBtnPress = (event: any) => {
    event.preventDefault();
    if (check_email(username) === false) {
      setEmailEntryError(true);
      const newError = ["This is not a valid WTC email address."];
      setErrorMessage(newError);
    } else if (password.length < 8) {
      setPasswordEntryError(true);
      const newError = [
        "This password is too short. Passwords need to be at least 8 characters long.",
      ];
      setErrorMessage(newError);
    } else if (
      password.length === 0 ||
      password === null ||
      password === undefined
    ) {
      setPasswordEntryError(true);
      const newError = ["Please enter a password."];
      setErrorMessage(newError);
    } else {
      setEmailEntryError(false);
      setPasswordEntryError(false);
      setErrorMessage([]);
    }

    if (
      !emailEntryError &&
      !passwordEntryError &&
      password.length >= 8 &&
      username.length > 0
    ) {
      handleSubmit();
    }
  };

  const submitBtnText = view === "login" ? "Sign in" : "Join KeloDraken";
  const pageHeadingText =
    view === "login"
      ? "Welcome back. Let's get you back inside"
      : "Welcome to the KeloDraken community";

  return (
    <View style={styles._landingContainer}>
      <View style={styles.header}>
        <Text style={styles._logoText}>kelodraken</Text>
      </View>
      <Text style={styles._heroText}>{pageHeadingText}</Text>
      <Text style={styles._heroSubText}>
        We're a community of over 300 amazing developers
      </Text>
      <form onSubmit={(event) => handleBtnPress(event)}>
        {errorMessage.map((item: string, index: number) => {
          return (
            <Text key={index} style={styles._errorMessage}>
              {item}
            </Text>
          );
        })}

        <input
          type="text"
          autoFocus
          required
          autoCapitalize="off"
          autoComplete="none"
          value={username}
          placeholder="WeThinkCode_ email address"
          onChange={(even) => handleSetUsername(even)}
          style={emailEntryError ? { outline: "2px solid red" } : {}}
          className="form_input bg-green-400 py-5 px-6 my-1 rounded text-black placeholder-black font-bold w-full"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(even) => handleSetPassword(even)}
          style={passwordEntryError ? { outline: "2px solid red" } : {}}
          className="form_input bg-green-400 py-5 px-6 my-1 rounded text-black placeholder-black font-bold w-full"
        />
        <button
          type="submit"
          onClick={(event) => handleBtnPress(event)}
          className="w-full bg-black text-white font-bold py-5 px-6 my-1 rounded"
        >
          {submitBtnText}
        </button>
      </form>
    </View>
  );
};

export default Login;
