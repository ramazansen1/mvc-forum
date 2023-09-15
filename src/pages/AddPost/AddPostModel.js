import { v4 } from "uuid";

class AddPostModel {
  postModel = {
    id: v4(),
    date: new Date(),
    user: "",
    title: "",
    text: "",
  };
}

export default AddPostModel;
