import { useEffect, useState } from "react";
import Axios from "axios";

export function useAxiosGet(url) {
  // create state variable
  const [request, setRequest] = useState({
    loading: false,
    data: [],
    error: false,
  });

  // loads data from the API and throws an error message if it fails
  useEffect(() => {
    setRequest({ loading: true, data: [], error: false });
    Axios.get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: [],
          error: true,
        });
      });
  }, [url]);

  return request;
}
