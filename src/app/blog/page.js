"use client";
import styles from "./blogPage.module.css";
import Menu from "../components/Menu/Menu";
import CardList from "../components/CardList/CardList";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogType}>
        Styles Blogs <span>🔍</span>
      </div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
