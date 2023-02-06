import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import Weather from "./Weather";
import { Col, Row, Form, Button, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";


function ByCountry({ page, nextPage, prevPage}) {
  const [articles, setArticles] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState([]);
  const {bycountry } = useParams();
  const [category, setCategory] = useState("");
  const [weather, setWeather]=useState([])

  //95221ebc50cf4e13b60594d17bb22237 api key

  //('https://arkakapi.herokuapp.com/https://newsapi-delta.vercel.app/api/news?country=us&category=business&apiKey=e316f0b03f6943de87c96dca9afde82a')

  ///news//top-headlines?country=${bycountry}&pageSize=5&apiKey=&page=${page}

  //'https://arkakapi.herokuapp.com/https://newsapi-delta.vercel.app/api/news?
  //https://newsapi-delta.vercel.app/api/news?country=${bycountry}&category=${category}&page=2&pageSize=3&apiKey=e316f0b03f6943de87c96dca9afde82a


  useEffect(() => {
    fetch(
      `https://arkakapi.onrender.com/https://newsapi.org/v2/everything?country=${bycountry}&category=${category}&page=${page}&pageSize=10&apiKey=95221ebc50cf4e13b60594d17bb22237`
    )
    // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London,uk&id=524901&appid=b0688766483910f75f1976a78685963d`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, [category, bycountry, page]);

  useEffect(()=>{
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/182536?apikey=gL8efJZAZHWIIwQIIPmcCM086Eh4USXS&details=true&metric=true`)
    .then((res) => {
      if (!res.ok) {
        throw Error("could not fetch weather data");
      }
      return res.json();
    })

    .then((data) => {
      setWeather(data);
     
      setIsPending(false);
    })
    .catch((err) => {
      console.log(err.message);
      setError(err.message);
    });
  },[bycountry,page])

  return (
    <>
      <Form.Group className="pb-5 category" controlId="formGridState">
        <Form.Select
          defaultValue={"default"}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value={"default"} disabled>
            Choose a category
            {console.log(category)}
          </option>
          <option value="business">Bussiness</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </Form.Select>
      </Form.Group>

      <div>Page {page}</div>
      <div className="pagination  d-flex justify-content-center">
        <ButtonGroup aria-label="" className="pb-3">
          <Button
            variant="  btn btn-outline-light m-1 px-5 "
            onClick={prevPage}
          >
            Prev
          </Button>
          <Button variant="outline-light  m-1 px-5" onClick={() => {
            nextPage()

          }}>
            Next
          </Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col md={8}>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {articles && (
          <ArticleList
          articles={articles}
          nextPage={nextPage}
          prevPage={prevPage}
          setCategory={setCategory}
          category={category}
          bycountry={bycountry}
          />
          )}
      </div>
          </Col>
          <Col md={4}>
          <Weather weather={weather} />
          </Col>
          </Row>
      <div className="pagination  d-flex justify-content-center">
        <ButtonGroup aria-label="" className="pb-3">
          <Button
            variant="  btn btn-outline-light m-1 px-5 "
            onClick={prevPage}
          >
            Prev
          </Button>
          <Button variant="outline-light  m-1 px-5" onClick={() => {
            nextPage()

          }}>
            Next
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default ByCountry;
