"use client";
import React, { useEffect, useState } from "react";
import styles from "./singleBlog.module.css";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import { Comments } from "../components/comments/Comments";
import { useParams } from "next/navigation";
import { usePostsContext } from "@/context/PostsContext";

const SingleBlog = () => {
  const { slug } = useParams();
  const { posts } = usePostsContext();
  const [currentPost, setCurrentPost] = useState([]);

  useEffect(() => {
    if (posts !== undefined) {
      setCurrentPost(posts?.filter((post) => String(post.postId) === slug));
    }
  }, [posts]);

  // console.log(userData);
  console.log(posts);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {posts ? currentPost[0]?.postTitle : ""}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt="user1"
                fill
                className={styles.userImage}
              />
            </div>
            <div className={styles.userData}>
              <span className={styles.userName}>Hassan elsayd</span>
              <span className={styles.date}>
                {posts ? currentPost[0]?.postDate : ""}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={posts ? currentPost[0]?.postImage : ""}
            alt="user1"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <p className={`${styles.description}`}>
            {posts ? currentPost[0]?.postData : ""}
          </p>

          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
