import axios from "axios";

axios.defaults.baseURL = "https://picsum.photos";

export const fetchData = async ({ url }) => {
  let result = null;
  let errorMessage = "";
  let loading = true;
  try {
    const { data } = await axios.get(url);
    result = data;
  } catch (error) {
    errorMessage = error;
  } finally {
    loading = false;
    return { result, errorMessage, loading };
  }
};
