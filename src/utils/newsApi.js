import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "4a58b460765c477aabdc11d5ad2c4eac"
    
    useEffect(() =>{
axios.get(
`https://newsapi.org/v2/everything?q=tesla&from=2021-08-14&sortBy=publishedAt&apiKey=${apiKey}`).then(response => setData(response.data)).catch(err => console.log(err));
    },[data]);
    
    return(
        <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    );
};