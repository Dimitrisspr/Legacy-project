import axios from "axios";
import API_URL from "../../config"

const PostLoginData = async (data) => {
 
  try {
    //const response = await axios.post("http://localhost:8080/login", data);
    const response = await axios.post(`${API_URL}/login`, data);

    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      alert("Logged in Successfully");
  
      return true;
    }
  } catch (error) {
    alert("Unable to Login...");
    console.log(error);
  }
};

export default PostLoginData;
