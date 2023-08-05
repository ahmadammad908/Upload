import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isPublishing, setIsPublishing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    setError("");
    if (!formData.title || !formData.description) {
      toast.error("Please fill all the fields");
      return;
    }

    setIsPublishing(true);
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      if (progressValue <= 100) {
        setProgress(progressValue);
      } else {
        clearInterval(interval);
        setProgress(0);
        setIsPublishing(false);
        const articleRef = collection(db, "Articles");
        addDoc(articleRef, {
          title: formData.title,
          description: formData.description,
          createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            toast.success("Article added successfully");
            navigate("/");
          })
          .catch((err) => {
            toast.error("Error adding article");
          });
      }
    }, 500);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        margin: "10px",
      }}
    >
      <div className="bg-white shadow-md rounded-md p-8 max-w-sm w-full">
        <>
          <h2 className="text-3xl font-extrabold leading-10 text-gray-900 dark:text-gray-100 mb-6">
            Upload Your Ideas
          </h2>
          <div className="space-y-4">
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                What is Your Name ?
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Your Name "
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Whats is Your Idea 🤔
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-32 px-3 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write Your Idea in this box"
              ></textarea>
            </div>

            {isPublishing && (
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: `${progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all ease-in-out duration-500"
                  ></div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">
                    Uploading Article ({progress}%)
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={handlePublish}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ease-in-out duration-300"
            >
              Publish
            </button>
          </div>
        </>
      </div>
      <ToastContainer />
    </div>
  );
}
