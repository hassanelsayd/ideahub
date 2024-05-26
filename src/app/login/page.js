"use client";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";
import { useAuthContext } from "@/context/AuthContext";
import Loading from "../components/Loading/loading";

const LoginPage = () => {
  const { authData } = useAuthContext();

  return (
    <div className={styles.container}>
      {authData.status === "loading" ? (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      ) : authData.status === "authenticated" ? (
        <div className={styles.authenticated}>
          You are already authenticated
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div onClick={() => signIn("google")} className={styles.socialBtn}>
            Sign in with Google
          </div>
          <div onClick={() => signIn("github")} className={styles.socialBtn}>
            Sign in with Github
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
