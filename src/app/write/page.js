"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuid } from "uuid";
import styles from "./write.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [expand, setExpand] = useState(false);
  const [base64Image, setBase64Image] = useState();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Code that should only run on the client side can be placed here
  }, []);

  const onValueChange = (content) => {
    setValue(content);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const submitPost = async () => {
    const id = uuid();
    const date = new Date().toLocaleDateString();
    const data = {
      userId: "4c97",
      postId: String(id).slice(0, 5),
      postTitle: title,
      postDesc: String(value).replace(/<[^>]*>/g, ""),
      postData: String(value).replace(/<[^>]*>/g, ""),
      postImage: base64Image,
      postCategory: "Coding",
      postDate: date,
    };

    setLoading(true);
    axios
      .post("http://localhost:3030/posts", data)
      .then(() => {
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Blog title"
        className={styles.title}
        value={title}
        onChange={onTitleChange}
      />
      <div className={styles.assets}>
        <button className={styles.button} onClick={() => setExpand(!expand)}>
          <Image src="/plus.png" width={25} height={25} alt="add" />
        </button>
        {expand && (
          <div className={styles.addButtons}>
            <button className={styles.addButton}>
              <input type="file" name="file" onChange={handleImageChange} />
              <Image src="/image.png" width={20} height={20} alt="image" />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                width={20}
                height={20}
                alt="external"
              />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={20} height={20} alt="video" />
            </button>
          </div>
        )}
      </div>
      <div className={styles.editor}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onValueChange}
          className={styles.textEditor}
          placeholder="Fill free to write what you want..."
          modules={modules}
        />
      </div>
      {loading ? (
        <button className={styles.publish}>
          <div className={styles.ldsDualRing}></div>
        </button>
      ) : (
        <button className={styles.publish} onClick={submitPost}>
          Publish
        </button>
      )}
    </div>
  );
};

export default WritePage;
