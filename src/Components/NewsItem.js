import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div className="my-3">
        <a
          rel="noreferrer"
          href={props.newsURL}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
              }}
            >
              <span className="badge bg-dark">{props.source}</span>
            </div>
            <img
              src={props.imageURL}
              width="150 px"
              height="200 px"
              className="card-img-top"
              alt="Can't load image"
            />
            <div className="card-body" style={{ height: "12rem" }}>
              <h5 className="card-title">{props.title}...</h5>
              <p className="card-text">{props.description}...</p>
              <p className="card-text">
                <small className="text-body-secondary">{props.date}</small>
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default NewsItem;
