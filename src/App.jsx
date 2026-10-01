import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [saved, setSaved] = useState(false);

  const count = post.length;
  const exceeded = count > 100;
  const disabled = post.trim() === "" || exceeded;

  const handleSavePost = () => {
    const savedPost = {
      content: post,
      createdAt: new Date().toLocaleString(),
    };

    localStorage.setItem("savedPost", JSON.stringify(savedPost));

    setSaved(true);
    setPost("");
  };

  return (
    <div className="page">
      <div className="post-card">

        <div className="header">
          <h1>Create a Post</h1>
          <p>Share something with your community</p>
        </div>

        <textarea
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
            setSaved(false);
          }}
          placeholder="What's on your mind?"
        />

        <div className="bottom">
          <span className={exceeded ? "counter danger" : "counter"}>
            {count} / 100
          </span>

          {exceeded && (
            <span className="error">
              Limit exceeded
            </span>
          )}
        </div>

        <button
          disabled={disabled}
          onClick={handleSavePost}
        >
          {saved ? "Post Saved ✓" : "Save Post"}
        </button>

      </div>
    </div>
  );
}

export default App;