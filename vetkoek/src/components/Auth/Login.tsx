import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, View } from "react-native";

import { userAuth } from "../../store";
import { styles } from "./style";

interface LoginProps {
  isFlipped: boolean;
}

const Login: React.FC<LoginProps> = view(({ isFlipped }): JSX.Element => {
  const [, setIsLoading] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<Array<string>>([""]);

  const [emailEntryError, setEmailEntryError] = useState<boolean>(false);
  const [passwordEntryError, setPasswordEntryError] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [, setCookie] = useCookies(["UIDT"]);

  useEffect((): void => {
    setUsername("");
    setPassword("");
    setErrorMessage([""]);
    setEmailEntryError(false);
    setPasswordEntryError(false);
    setIsLoading(false);
  }, [isFlipped]);

  const check_email = (email: string): boolean => {
    let regex = /[a-zA-Z0-9_.+-]+@student.wethinkcode.co.za+/gm;
    if (regex.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const setUserToken = (token: any): void => {
    setCookie("UIDT", token, {
      path: "/",
      maxAge: 2628000,
    });
    window.location.replace("/");
  };

  const handleSubmit = (): void => {
    const endpoint: string = "http://api.localhost:8000/v1/users/login/";

    const data: object = {
      username: username,
      password: password,
    };

    axios
      .post(endpoint, data)
      .then((response): void => {
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
      .catch((): void => {
        setErrorMessage(["Incorrect log in credentials"]);
        setIsLoading(false);
      });
  };

  const handleSetUsername = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handleSetPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleBtnPress = (event: any): void => {
    event.preventDefault();

    if (check_email(username) === false) {
      setEmailEntryError(true);
      const newError: string[] = [
        "This is not a valid WTC student email address.",
      ];
      setErrorMessage(newError);
    } else if (password.length < 8) {
      setPasswordEntryError(true);
      const newError: string[] = [
        "This password is too short. Passwords need to be at least 8 characters long.",
      ];
      setErrorMessage(newError);
    } else if (
      password.length === 0 ||
      password === null ||
      password === undefined
    ) {
      setPasswordEntryError(true);
      const newError: string[] = ["Please enter a password."];
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

  const handleCardFlip = (): void => {
    userAuth.authCardFlipped = false;
  };

  const submitBtnText: string = "Sign in";
  const pageHeadingText: string = "Welcome back. Let's get you back inside";

  return (
    <View style={styles._landingContainer}>
      <View style={styles.header}>
        <Text style={styles._logoText}>dukesoul</Text>
      </View>
      <Text style={styles._heroText}>{pageHeadingText}</Text>
      <Text style={styles._heroSubText}>
        We're a community of over 300 amazing developers
      </Text>
      <form onSubmit={(event) => handleBtnPress(event)}>
        {errorMessage.map((item: string, index: number): JSX.Element => {
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
          placeholder="WTC student email address"
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
      <Text onPress={handleCardFlip}>
        Don't have an account? Register for free here
      </Text>
    </View>
  );
});
export default Login;
