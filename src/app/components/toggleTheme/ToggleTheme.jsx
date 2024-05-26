"use client";
import Image from "next/image";
import styles from "./toggleTheme.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
export const ToggleTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={changeTheme}
      style={
        theme === "light"
          ? { backgroundColor: "#333" }
          : { backgroundColor: "#fff" }
      }
    >
      <Image src={"/moon.png"} width={18} height={18} alt="" />
      <Image src={"/sun.png"} width={18} height={18} alt="" />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { left: "8px", backgroundColor: "#fff" }
            : { right: "8px", backgroundColor: "#333" }
        }
      ></div>
    </div>
  );
};
