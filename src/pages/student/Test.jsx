import { useEffect } from "react";
import api from "../../api/api";

const Test = () => {
  useEffect(() => {
    api.get("/")
      .then(res => console.log("Backend:", res.data))
      .catch(err => console.error(err));
  }, []);

  return <h2>Student Backend Test</h2>;
};

export default Test;
