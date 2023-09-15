import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ setShowPopup, userName, deleteHandle }) => {
  const [specialData, setSpecialData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setSpecialData(res.data));
  }, []);

  const handleDelete = (id) => {
    debugger;
    const newData = specialData.filter((specialPost) => specialPost.id !== id);

    setSpecialData(newData);

    // ListpostViewda da silme işlemi yapıyoruz.
    deleteHandle(id);
  };
  return (
    <>
      <PopupView
        setShowPopup={setShowPopup}
        userName={userName}
        specialData={specialData}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default PopupController;
