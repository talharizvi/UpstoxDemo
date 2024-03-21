import { useState, useEffect } from "react";
import { holdingsUrl } from "../utils/constant";

const useFetchHoldingData = ()=>{
    const [data, setData] = useState([]);             //holdings data 
    const [isLoading, setIsLoading] = useState(true); //loader status
    const [error, setError] = useState(null);         //error
    
    const fetchData = async (holdingsUrl) => {
        try {
          const response = await fetch(holdingsUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setData(data.userHolding);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.message);
          setIsLoading(false);
        }
      };

    useEffect(()=>{
        fetchData(holdingsUrl)
    },[])

    return [data, isLoading, error]
}

export default useFetchHoldingData