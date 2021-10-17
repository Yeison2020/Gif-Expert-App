import { useState, useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 2000);
    });
  }, [category]);

  setTimeout(() => {
    setState({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false,
    });
  }, 2000);
  return state;
};

export default useFetchGifs;
