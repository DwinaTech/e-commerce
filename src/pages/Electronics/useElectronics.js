import axios from "axios";
import { useEffect, useState } from "react";

export const useElectronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setElectronics(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchElectronics();
  }, []);

  return { electronics };
};
