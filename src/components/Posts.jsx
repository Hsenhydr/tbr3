import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { fireStore } from "../firebase";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(fireStore, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">طلبات وحدات الدم</h1>
      <div className="container text-center mt-5">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
      <div className="container d-flex justify-content-center flex-wrap gap-3 pt-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card mb-3 forhover"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title fs-2 text-center ">{post.hospital}</h5>
              <h6 className="m-0 p-0 text-center lead fs-6">{post.region}</h6>
              <p className="card-text fs-4 lead text-center fw-semibold">
                {post.phoneNumber}
              </p>
              <div className="d-flex justify-content-evenly align-items-center">
                <p className="card-subtitle mb-2 rounded border px-3 badge fs-5 bg-danger">
                  {post.bloodType}
                </p>
                <p className="card-subtitle mb-2 rounded border px-3 badge fs-5 text-dark">
                  {post.bloodUnits} وحدات
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
