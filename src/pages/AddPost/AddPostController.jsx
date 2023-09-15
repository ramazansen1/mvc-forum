import { useState } from "react";
import AddPostModel from "./AddPostModel";
import AddPostView from "./AddPostView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();
  const model = new AddPostModel();

  const [form, setForm] = useState(model.postModel);

  const onInputChange = (label, value) => {
    const copyForm = { ...form };

    copyForm[label] = value;

    setForm(copyForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.title || !form.text) {
      alert("Form boş bırakılamaz!");
      return;
    }

    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };
  return (
    <>
      <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
    </>
  );
};

export default AddPostController;
