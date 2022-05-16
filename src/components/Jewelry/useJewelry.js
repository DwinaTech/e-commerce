import axios from "axios";
import { useEffect, useState } from "react";

export const useJewelry = () => {
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    const fetchJewelries = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      setJewelries(data);
    };
    fetchJewelries();
  }, []);

  return { jewelries };
};
