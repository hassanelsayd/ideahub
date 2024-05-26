import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AuthState } from "../authState/AuthState";
import { ToggleTheme } from "../toggleTheme/ToggleTheme";
export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src={"/facebook_icon.png"}
          alt="facebook"
          width={30}
          height={30}
        />

        <Image
          src={"/linkedin_icon.png"}
          alt="linkedin"
          width={30}
          height={30}
        />
        <Image
          src={"/instagram_icon.png"}
          alt="instagram"
          width={30}
          height={30}
        />

        <Image
          src={"/pinterest_icon.png"}
          alt="pinterest"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.logo}>
        <Link href="/">Ideahub</Link>
      </div>
      <div className={styles.links}>
        <ToggleTheme />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="#footer" className={styles.link}>
          Contact
        </Link>

        <AuthState />
      </div>
    </div>
  );
};
