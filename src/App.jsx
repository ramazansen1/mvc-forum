import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPost/ListPostController";
import Header from "./components/Header";
import AddPostController from "./pages/AddPost/AddPostController";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListPostController />} />
          <Route path="/add-post" element={<AddPostController />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
