import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";

const { Meta } = Card;

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=be54202d78dd421b81a2e916d8987d4b"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  return (
    <div className="App">
      <h1>Latest News App</h1>
      {news.map((item, index) => {
        return (
          <div className="block featureBlock">
            <div className="container-fluid">
              <Card
                key={index}
                hoverable
                style={{
                  background: "#808080",
                  position: "relative",
                  float: "right",
                  margin: "30px",
                  width: 240,
                }}
                cover={<img alt="loading" src={item.urlToImage} />}
              >
                <Meta title={item.title} description={item.content} />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button type="primary" style={{ marginTop: "10px" }}>
                    Read More
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
