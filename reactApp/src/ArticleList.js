import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Countries from './data/countries.json'


function ArticleList({ articles, page, bycountry }) {
    // const articles=props.articles  // and we use (prop) as argument
    // const title=props.title



    return (
        <div className='article-list'>
            {/* title={`All the Top Headlines from US!`} */}
            <small className='text-light'> Page {page}</small>
            {Countries.map((country) => (
                <>
                    {country.code === bycountry ? (<div className='text-light'>
                        <h1 className='text-light'>All the Top Headlines from  {country.name}</h1>
                    </div>) : " "
                    }
                </>
            ))}

            {articles.map((article, index) => (
                <>
                    < section key={index} className="article-preview" >
                        <a href={`${article.url}`} target="_blank" className='detail-link' rel="noreferrer">
                            <Row className="row gx-5">
                                <h4>{article.title} </h4>
                                <Col md={6} className="p-3 ">
                                    <div className="title" key={article.title}>
                                        {article.urlToImage != undefined || article.urlToImage != null ?
                                            (<img src={`${article.urlToImage}`} className='img-home' />) :
                                            (<div style={{
                                                color: "white",
                                                backgroundColor: "#fc0000",
                                                borderRadius: '3px',
                                                width: "60%",
                                                padding: "5px"
                                            }}><h2>T<small>heT<small>oday</small></small>N<small>ews</small></h2></div>)}
                                        <p><em>Source: {article.source.name}</em></p>
                                        <p> Published at {article.publishedAt}</p>
                                    </div>
                                </Col>
                                <Col md={6} className="article-text pt-3 ">
                                    <div key={article.title}>

                                        <p> {article.description}</p>
                                        <small><em> {article.content}. <p> Click for more</p></em></small>

                                    </div>
                                </Col>

                            </Row>
                        </a>
                    </section>
                </>
            ))
            }
        </div >
    )
}

export default ArticleList