import React from "react";
import styles from "./styles.module.scss";

type MyProfileProps = {
  darkMode?: boolean;
};

export function MyProfile({ darkMode }: MyProfileProps) {
  return <div className={darkMode ? styles.dark : ""}>MyProfile</div>;
}
