import { view } from "@risingstack/react-easy-state";
import axios from "axios";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Text, View } from "react-native";

import { userAuth } from "../../store";
import { Input } from "./FormInput";
import { styles } from "./style";

interface AuthPageProps {
  isFlipped: boolean;
  view: string;
}

const Page: React.FC<AuthPageProps> = view(
  ({ isFlipped, view }): JSX.Element => {
    const [, setIsLoading] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<Array<string>>([""]);

    const [emailEntryError, setEmailEntryError] = useState<boolean>(false);
    const [passwordEntryError, setPasswordEntryError] =
      useState<boolean>(false);

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
      if (regex.test(email.toLowerCase()) === false) {
        return false;
      } else {
        return true;
      }
    };

    const setUserToken = (token: string): void => {
      setCookie("UIDT", token, {
        path: "/",
        maxAge: 2628000,
      });
      window.location.replace("/");
    };

    const handleSubmit = (): void => {
      const endpoint: string = `http://kelodraken.api.localhost:8000/v1/users/${view}/`;

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
          if (view === "login") {
            setErrorMessage(["Incorrect log in credentials"]);
          } else {
            setErrorMessage(["Bad request"]);
          }
          setIsLoading(false);
        });
    };

    const handleSetUsername = (event: ChangeEvent<HTMLInputElement>): void => {
      setUsername(event.target.value);
    };

    const handleSetPassword = (event: ChangeEvent<HTMLInputElement>): void => {
      setPassword(event.target.value);
    };

    const handleBtnPress = (event: FormEvent<HTMLFormElement>): void => {
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
      userAuth.authCardFlipped = !userAuth.authCardFlipped;
    };

    const pageHeadingText: string =
      view === "login"
        ? "Welcome back. Let's get you back inside"
        : "Welcome to the kelodraken community";
    const submitBtnText: string =
      view === "login" ? "Sign in" : "Join kelodraken";
    const nextPageBtnText: string =
      view === "login"
        ? "Don't have an account? Register for free here"
        : "Already have an account? Sign in here";

    const inputTailwindBGClass: string =
      view === "login" ? "bg-yellow-400" : "bg-green-400";

    return (
      <View
        style={
          view === "login" ? styles._landingContainer : styles.landingContainer
        }
      >
        <View style={styles.header}>
          <Text style={view === "login" ? styles._logoText : styles.logoText}>
            kelodraken
          </Text>
        </View>
        <Text style={view === "login" ? styles._heroText : styles.heroText}>
          {pageHeadingText}
        </Text>
        <form onSubmit={(event) => handleBtnPress(event)}>
          {errorMessage.map((item: string, index: number): JSX.Element => {
            return (
              <Text
                key={index}
                style={
                  view === "login" ? styles._errorMessage : styles.errorMessage
                }
              >
                {item}
              </Text>
            );
          })}

          <Input
            type="text"
            placeholder="WTC student email address"
            value={username}
            style={emailEntryError ? { outline: "2px solid red" } : {}}
            onChange={(event) => handleSetUsername(event)}
            className={`form_input ${inputTailwindBGClass} py-5 px-6 my-1 rounded text-black placeholder-black font-bold w-full`}
          />
          <Input
            type="password"
            placeholder="Password"
            style={passwordEntryError ? { outline: "2px solid red" } : {}}
            onChange={(even) => handleSetPassword(even)}
            className={`form_input ${inputTailwindBGClass} py-5 px-6 my-1 rounded text-black placeholder-black font-bold w-full`}
          />

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-5 px-6 my-1 rounded"
          >
            {submitBtnText}
          </button>
        </form>
        <Text
          style={
            view === "login" ? styles.nextPageBtnText : styles._nextPageBtnText
          }
          onPress={handleCardFlip}
        >
          {nextPageBtnText}
        </Text>
      </View>
    );
  }
);
export default Page;
