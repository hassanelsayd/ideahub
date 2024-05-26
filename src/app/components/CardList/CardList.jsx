"use client";
import React, { useEffect } from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import { usePostsContext } from "@/context/PostsContext";
const CardList = () => {
  const { posts } = usePostsContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recently posted</h1>
      <div className={styles.posts}>
        {posts?.map((post) => {
          return (
            <Card
              key={post.postId}
              id={post.postId}
              postImage={post.postImage}
              postTitle={post.postTitle}
              postDesc={post.postDesc}
              postDate={post.postDate}
              postCategory={post.postCategory}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
