import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Comment } from "react-loader-spinner";

const IDEAS = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <>
      {articles.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="white"
            backgroundColor="#4F46E5"
          />
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {articles.map((data) => (
          <div
            key={data.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              {data.title}
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              {data.description}
            </p>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 mt-4">
              <p className="text-sm">
                {data.createdAt.toDate().toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IDEAS;
