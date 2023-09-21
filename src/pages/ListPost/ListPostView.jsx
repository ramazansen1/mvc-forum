import PopupController from "../../components/popup/PopupController";

const ListPostView = ({
  posts,
  showPopup,
  setShowPopup,
  userName,
  setUserName,
  deletePost,
  deleteData,
  setPosts,
}) => {
  return (
    <>
      <div className="container">
        {!posts && <p>Yükleniyor...</p>}
        {posts?.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="info">
                <h1>{post.title}</h1>
                <p
                  onClick={() => {
                    setShowPopup(true), setUserName(post.user);
                  }}
                >
                  {post.user}
                </p>
              </div>
              <p>{post.text}</p>
            </div>
          );
        })}

        {showPopup && (
          <PopupController
            setShowPopup={setShowPopup}
            userName={userName}
            deletePost={deletePost}
            deleteData={deleteData}
            posts={posts}
            setPosts={setPosts}
          />
        )}
      </div>
    </>
  );
};

export default ListPostView;
