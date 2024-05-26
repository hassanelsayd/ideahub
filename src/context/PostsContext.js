"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3030/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);
