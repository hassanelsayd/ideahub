"use client";
import React, { useState } from "react";
import styles from "./authState.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export const AuthState = () => {
  const [open, setOpen] = useState(false);
  const data = useSession();
  return (
    <div className={styles.container}>
      {data.status === "loading" ? (
        <div className={styles.ldsDualRing}></div>
      ) : data.status === "authenticated" ? (
        <>
          <Link href="/write" className={styles.write}>
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>

          {data.status === "loading" ? (
            <div className={styles.ldsDualRing}></div>
          ) : data.status === "authenticated" ? (
            <>
              <Link href="/write" className={styles.responsiveWrite}>
                Write
              </Link>
              <span>Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </div>
  );
};
