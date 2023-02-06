import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArticleDetails({ articles, setBlogs, isPending, setIsPending, error, setError }) {

    const { author} = useParams()
    useEffect(() => {

        fetch('https://arkakapi.onrender.com/https://newsapi-delta.vercel.app/api/news?country=us&category=business&apiKey=e316f0b03f6943de87c96dca9afde82a' + author)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data.articles)
                console.log(data.articles)
                setIsPending(false)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })

    }, [])
    return (
        <div className='article-details'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {articles &&
                <article className='article'>
                    <h2>{articles.title} </h2>
                    <p><em>Writen by {articles.author}</em></p>
                    <div>{articles.description}</div>
                    <div>{articles.content}</div>
                </article>}
       </div>
    )
}

export default ArticleDetails