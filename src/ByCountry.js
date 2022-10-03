import React, { useState, useEffect } from 'react'
import ArticleList from './ArticleList'
import { Button, ButtonGroup } from "react-bootstrap";
import { useParams } from 'react-router-dom';


function ByCountry({ page, nextPage, prevPage, country }) {
    const [articles, setArticles] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState([])
    const { bycountry } = useParams()


    //95221ebc50cf4e13b60594d17bb22237 api key
    useEffect(() => {

        fetch(`https://matina.vercel.app/news/top-headlines?country=${bycountry}&pageSize=5&apiKey=95221ebc50cf4e13b60594d17bb22237&page=${page}`)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setArticles(data.articles)
                console.log(data.articles)
                setIsPending(false)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })

    }, [page, bycountry])

    return (
        <>
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
            <div className='home'>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {articles && <ArticleList articles={articles} nextPage={nextPage} prevPage={prevPage} page={page} bycountry={bycountry}  />}
                {/* title={`All the Top Headlines from ${bycountry}!`} */}
            </div>
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
    )
}

export default ByCountry