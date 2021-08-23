import axios from "axios"
import { useState, useEffect } from "react";

const UseRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
};
export default UseRequestData;
