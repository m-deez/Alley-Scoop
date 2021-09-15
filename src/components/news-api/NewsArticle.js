import React from "react";


function NewsArticle({data}) {
    return (<div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.content}</p>
    </div> );
}
