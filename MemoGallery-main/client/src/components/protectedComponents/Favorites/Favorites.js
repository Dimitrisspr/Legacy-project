import axios from "axios";
import { useEffect, useState } from "react";

function Favorites() {
  const [favoritePhoto, setFavoritePhoto] = useState([]);

  async function displayFavorites() {
    try {
      const response = await axios.get("http://localhost:8080/auth/favourite");
      setFavoritePhoto(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    displayFavorites();
  }, []);

  return (
    <>
      <div className="card-wrapper">
        {favoritePhoto.map((photo) => {
          return (
            <div className="card" key={photo._id}>
              <div type="file" name="file">
                {photo.photoUrl && <img src={photo.photoUrl} alt="" />}
              </div>
              <p>{photo.description}</p>

              <input type={photo._id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
