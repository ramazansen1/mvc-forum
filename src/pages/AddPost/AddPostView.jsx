const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Yeni Gönderi Ekle</h2>
        <fieldset>
          <label>Kullanıcı</label>
          <input
            onChange={(e) => onInputChange("user", e.target.value)}
            type="text"
            placeholder="Örn:Ahmet"
          />
        </fieldset>

        <fieldset>
          <label>Konu</label>
          <input
            onChange={(e) => onInputChange("title", e.target.value)}
            type="text"
            placeholder="Örn:Mvc Nedir?"
          />
        </fieldset>
        <fieldset>
          <label>Açıklama</label>
          <textarea
            onChange={(e) => onInputChange("text", e.target.value)}
            type="text"
            placeholder="Açıklamayı buraya yazınız..."
            maxLength={"100"}
          />
        </fieldset>
        <button>Gönder</button>
      </form>
    </>
  );
};

export default AddPostView;
