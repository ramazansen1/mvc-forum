import React from "react";

const PopupView = ({ setShowPopup, specialData, userName, handleDelete }) => {
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
                <h1>{post.title}</h1>
                <button onClick={() => handleDelete(post.id)}>Sil</button>
              </div>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopupView;
