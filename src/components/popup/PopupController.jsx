import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ setShowPopup, userName, deletePost, posts }) => {
  const [specialData, setSpecialData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setSpecialData(res.data));
  }, []);

  // popupdan silme
  const handleDelete = (id) => {
    // debugger;
    const newData = specialData.filter((specialPost) => specialPost.id !== id);

    setSpecialData(newData);

    // ListpostViewda da silme işlemi yapıyoruz.
    deletePost(id);
  };

  // api'daki veri güncelleme
  const updateData = (id) => {
    axios
      .patch(`http://localhost:3000/posts/${id}`, {
        title: editTitle.title,
        text: editText.text,
      })
      .then((res) => console.log("Veri Güncellendi", res.data))
      .catch((err) => console.log("Veri güncellenemedi", err));
  };

  const handleSave = (id) => {
    updateData(id);
    setShowPopup(false);
  };
  return (
    <>
      <PopupView
        setShowPopup={setShowPopup}
        userName={userName}
        specialData={specialData}
        setSpecialData={setSpecialData}
        handleDelete={handleDelete}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        handleSave={handleSave}
        setEditTitle={setEditTitle}
        setEditText={setEditText}
        posts={posts}
      />
    </>
  );
};

export default PopupController;
