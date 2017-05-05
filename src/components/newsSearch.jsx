import React from 'react';

const style = {
  display: "inline-block",
  padding: "0 25px",
  height: "50px",
  fontSize: "16px",
  lineHeight: "50px",
  margin: "10px",
  borderRadius: "25px",
  backgroundColor: "#f1f1f1"
}

const NewsSearch = (props) => {
  return (
    <div className="jumbotron col-md-8 offset-md-2" style={{ backgroundColor: "transparent" }}>
      <h1 className="display-3">News Sources</h1>
      <hr />
      {props.sources.map((source) => (
        <div className="chip" key={source.id} style={style}> <a href={source.url}> {source.name} </a></div>
      ))}
    </div>
  );
};

export default NewsSearch;