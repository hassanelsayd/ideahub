"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{mount && children}</div>;
};
