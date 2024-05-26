import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <div className={styles.about}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50} alt="ideahub" />
          <h1>Ideahub.</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          perferendis quas reiciendis voluptate, ea nostrum? Accusantium qui
          similique hic impedit earum doloribus, officia, explicabo reiciendis
          fugit unde tenetur est maiores!
        </p>
        <div className={styles.social}>
          <Image
            src="/facebook_icon.png"
            width={25}
            height={25}
            alt="facebook"
          />
          <Image
            src="/instagram_icon.png"
            width={25}
            height={25}
            alt="instagram"
          />
          <Image
            src="/linkedin_icon.png"
            width={25}
            height={25}
            alt="linkedin"
          />
          <Image
            src="/pinterest_icon.png"
            width={25}
            height={25}
            alt="pinterest"
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Pinterest</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
