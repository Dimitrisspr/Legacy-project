import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../../config";

function Favorites() {
  const [favoritePhoto, setFavoritePhoto] = useState([]);
  const token = localStorage.getItem("token");

  try {
    async function displayFavorites() {
      const response = await axios.get(`${API_URL}/auth/favorite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavoritePhoto(response.data);
    }

    //   const response = await axios.get(
    //     "http://localhost:8080/auth/favorite");
    //   setFavoritePhoto(response.data);
    // }

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
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <div> this is my favorite photo</div>
    </>
  );
}

export default Favorites;
