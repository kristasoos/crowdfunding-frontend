import { useState, useEffect } from "react";
import getFundraisers from "../api/get-fundraisers";

export default function useFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getFundraisers()
      .then((fundraisers) => {
        console.log({ fundraisers });
        setFundraisers(fundraisers);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { fundraisers, isLoading, error };
}
