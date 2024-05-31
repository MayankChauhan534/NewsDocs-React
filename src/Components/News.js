import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setArticles(
      parsedData.articles.filter(
        (articles) =>
          articles.title !== "[Removed]" && articles.description !== null
      )
    );

    setTotalResults(parsedData.totalResults);
    // setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews(1);
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));

    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "69px" }}>
        NewsDocs - Top{" "}
        {props.category === "general"
          ? ""
          : capitalizeFirstLetter(props.category)}{" "}
        Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={Math.random()}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 55) : ""}
                  description={
                    element.description ? element.description.slice(0, 120) : ""
                  }
                  newsURL={element.url}
                  imageURL={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s"
                  }
                  date={new Date(element.publishedAt).toLocaleString()}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
