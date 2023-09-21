import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListPostController = () => {
  const [posts, setPosts] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, [posts]);

  //apiden veri silme işlemini yapar.
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => console.log("Veri başarıyla silindi", res.data))
      .then(() => navigate("/"))
      .catch((err) => console.log(("Veri silinemedi", err)));
  };

  // post verisini silme
  const deletePost = (id) => {
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
        setPosts={setPosts}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        userName={userName}
        setUserName={setUserName}
        deletePost={deletePost}
      />
    </>
  );
};

export default ListPostController;
