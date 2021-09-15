import React from "react";


function NewsArticle({data}) {
    return (
    <div className="news">
      <h6 className="news__title">{data.title}</h6>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__source">{data.source.name}</span>
      <a href ={data.url} target="_blank">Link Here</a>
    </div>
    );
}

export default NewsArticle;
