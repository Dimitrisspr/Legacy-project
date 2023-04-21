import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [photos, setPhotos] = useState([]);
=======
import {useNavigate} from "react-router-dom"

function HomePage() {
  const [photos, setPhotos] = useState([true]);
>>>>>>> 8519a8a2c7982202c9ecd4a9ce0e6e8d41499285
  const navigate = useNavigate();

  async function getAllPhotos() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    console.log(token);
    const response = await axios.get("http://localhost:8080/auth/getPhotos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const eachPhotoLike = response.data.map((photo) => {
      return { ...photo, likes: 0, photoLiked: false };
    });
    setPhotos(eachPhotoLike);
  }

  async function likeButton(id) {
    let response = await axios.put(`http://localhost:8080/auth/likes/${id}`);
    const updatedPhotosWithLikes = photos.map((photo) => {
      if (photo._id === id) {
        return { ...photo, likes: response.data.likesNum, photoLiked: true };
      } else {
        return photo;
      }
    });
    setPhotos(updatedPhotosWithLikes);
  }

  useEffect(() => {
    getAllPhotos();
  }, []);
 
  async function handleDelete() {
    
    await axios
      .delete("http://localhost:8080/auth/deleteAll")
      .then((response) => {
<<<<<<< HEAD
        window.location.reload(false);
        navigate("/postPhotos");

        console.log(response);
=======
        navigate("/postPhotos");
        window.location.reload()
        console.log("photo deleted");
>>>>>>> 8519a8a2c7982202c9ecd4a9ce0e6e8d41499285
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="card-wrapper">
        {photos.map((photo) => {
          return (
            
            <div className="card" key={photo._id}>
              
              <div>
                {photo.photoUrl && <img src={photo.photoUrl} alt="photo" />}
              </div>
              <p>{photo.description}</p>
              <button
                className="likeButton"
                onClick={() => likeButton(photo._id)}
              >
                like{photo.likes}
              </button>
              <input type={photo._id} />
<<<<<<< HEAD
=======
              
>>>>>>> 8519a8a2c7982202c9ecd4a9ce0e6e8d41499285
            </div>
            
          );
        })}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default HomePage;
