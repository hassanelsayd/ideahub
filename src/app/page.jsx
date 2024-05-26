"use client";
import { useEffect } from "react";
import CardList from "./components/CardList/CardList";
import CategoriesList from "./components/Categories/CategoriesList";
import { Featured } from "./components/Featured/Featured";
import Menu from "./components/Menu/Menu";
import styles from "./homepage.module.css";
export default function Home() {
  return (
    <div>
      <Featured />
      <CategoriesList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
