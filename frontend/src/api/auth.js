import axios from "axios";

const auth = () => {
  axios.create({
    baseURL: "http://localhost:5000/api/auth/google",
  });
};

export default auth;
