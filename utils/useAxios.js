import { useState, useEffect } from "react";
import axios from "axios";
import fetchData from "./Api";

axios.defaults.baseURL = "https://picsum.photos";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await axios.get(url);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
