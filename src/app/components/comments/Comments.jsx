import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
export const Comments = () => {
  const auth = true;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.addCommentArea}>
        {auth ? (
          <div className={styles.addComment}>
            <textarea
              className={styles.commentInput}
              placeholder="Add a comment..."
            ></textarea>
            <button className={styles.publish}>➤</button>
          </div>
        ) : (
          <Link href="/login" className={styles.login}>
            Please Login to write comment
          </Link>
        )}
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
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
              <span className={styles.userName}>Hassan Elsayd</span>
              <span className={styles.date}>15.05.2024</span>
            </div>
          </div>
          <p className={styles.commentBody}>
            Eu ea nostrud pariatur excepteur consequat incididunt. Occaecat
            nulla eiusmod quis amet veniam culpa eiusmod eiusmod elit non ea in
            aliquip. Minim consectetur est officia ullamco aute occaecat duis
            mollit duis adipisicing. Eiusmod proident consectetur consectetur
            reprehenderit non. Exercitation excepteur do mollit minim.
          </p>
        </div>
        <div className={styles.comment}>
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
              <span className={styles.userName}>Hassan Elsayd</span>
              <span className={styles.date}>15.05.2024</span>
            </div>
          </div>
          <p className={styles.commentBody}>
            Eu ea nostrud pariatur excepteur consequat incididunt. Occaecat
            nulla eiusmod quis amet veniam culpa eiusmod eiusmod elit non ea in
            aliquip. Minim consectetur est officia ullamco aute occaecat duis
            mollit duis adipisicing. Eiusmod proident consectetur consectetur
            reprehenderit non. Exercitation excepteur do mollit minim.
          </p>
        </div>
        <div className={styles.comment}>
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
              <span className={styles.userName}>Hassan Elsayd</span>
              <span className={styles.date}>15.05.2024</span>
            </div>
          </div>
          <p className={styles.commentBody}>
            Eu ea nostrud pariatur excepteur consequat incididunt. Occaecat
            nulla eiusmod quis amet veniam culpa eiusmod eiusmod elit non ea in
            aliquip. Minim consectetur est officia ullamco aute occaecat duis
            mollit duis adipisicing. Eiusmod proident consectetur consectetur
            reprehenderit non. Exercitation excepteur do mollit minim.
          </p>
        </div>
        <div className={styles.comment}>
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
              <span className={styles.userName}>Hassan Elsayd</span>
              <span className={styles.date}>15.05.2024</span>
            </div>
          </div>
          <p className={styles.commentBody}>
            Eu ea nostrud pariatur excepteur consequat incididunt. Occaecat
            nulla eiusmod quis amet veniam culpa eiusmod eiusmod elit non ea in
            aliquip. Minim consectetur est officia ullamco aute occaecat duis
            mollit duis adipisicing. Eiusmod proident consectetur consectetur
            reprehenderit non. Exercitation excepteur do mollit minim.
          </p>
        </div>
      </div>
    </div>
  );
};
