import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "4a58b460765c477aabdc11d5ad2c4eac"
    // old key timed out
    // "48c0314982244889b524282371ce22c5"z
    
    useEffect(() =>{
        axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey=${apiKey}`).then(response => setData(response.data)).catch(err => console.log(err)); 
            //console.log(data);
},[]);


    return(
        <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    );
};