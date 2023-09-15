import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [posts, setPosts] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => console.log("Veri başarıyla silindi", res.data))
      .then(() => navigete("/"))
      .catch((err) => console.log(("Veri silinemedi", err)));
  };

  const deleteHandle = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);

    // state'i güncelle
    setPosts(newPosts);
    // db.json dan veriyi kaldırma
    deleteData(id);
  };

  return (
    <>
      <ListPostView
        posts={posts}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        userName={userName}
        setUserName={setUserName}
        deleteHandle={deleteHandle}
      />
    </>
  );
};

export default ListPostController;
