import axios from "axios";

const isLoggedin = async () => {
  const { data } = await axios.get("/api/auth/google/current_user");
  if (data._id) return true;
  return data;
};

export default isLoggedin;
