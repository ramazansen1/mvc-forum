const PopupView = ({
  setShowPopup,
  specialData,
  userName,
  handleDelete,
  isEditMode,
  setIsEditMode,
  handleSave,
  setEditTitle,
  setEditText,
  posts = { posts },
}) => {
  return (
    <>
      <div className="wrapper">
        <div className="popup">
          <div className="btn-info">
            <h4>
              <span>{userName}</span> kullanıcısın gönderisi
            </h4>
            <button onClick={() => setShowPopup(false)}>Kapat</button>
          </div>
          {!specialData && <p>Yükleniyor...</p>}

          {specialData?.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                {isEditMode ? (
                  <input
                    className="change-title"
                    defaultValue={post.title}
                    onChange={(e) =>
                      setEditTitle({ ...posts, title: e.target.value })
                    }
                    placeholder="Konu"
                  />
                ) : (
                  <h1>{post.title}</h1>
                )}

                <div className="btn">
                  {isEditMode && (
                    <button onClick={() => handleSave(post.id)}>Kaydet</button>
                  )}
                  <button
                    onClick={() => {
                      setIsEditMode(!isEditMode);
                    }}
                    className="update-btn"
                  >
                    {isEditMode ? "İptal" : "Düzenle"}
                  </button>

                  {isEditMode ? (
                    ""
                  ) : (
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="delete-btn"
                    >
                      Sil
                    </button>
                  )}
                </div>
              </div>
              {isEditMode ? (
                <input
                  className="change-text"
                  defaultValue={post.text}
                  onChange={(e) =>
                    setEditText({ ...posts, text: e.target.value })
                  }
                  placeholder="Açıklama"
                ></input>
              ) : (
                <p>{post.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopupView;
