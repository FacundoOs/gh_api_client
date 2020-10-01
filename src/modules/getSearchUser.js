import axios from "axios"

const getSearchUser = async () => {
  let response= await axios.get("/search");
  return response.items
}