import axios from "axios";
import API_URL from "../../config"

const PostRegistData = async (data) => {
  try {
    await axios.post(`${API_URL}/register`, data);
  } catch (error) {
    alert("Unable to Register...");
    console.log(error);
  }
};

export default PostRegistData;
