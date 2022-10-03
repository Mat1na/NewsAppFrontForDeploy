import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
import Create from './Create'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ByCountry from './ByCountry'





function App() {
    const [page, setPage] = useState(1);
    // const [country, setCountry] = useState("us")
    const [countryName, setCountryName] = useState("the United States")
    

  const nextPage = () => {
    setPage(page + 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  };
    
    return (
        <BrowserRouter>

            <div className='App'>
                <Header />
                <div className='back'>

                <div className="content">
                  {/* <img src={imgagebc}/> */}
                    <Routes>
                        <Route path='/' element={<Home nextPage={nextPage} prevPage={prevPage} page={page}  />} />
                        {/* <Route path='/create' element={<Create />} /> */}
                        <Route path='/country/:bycountry' element={<ByCountry nextPage={nextPage} prevPage={prevPage} page={page}/>} />

                    </Routes>
                </div>

                </div>
                <Footer/>
                </div>

        </BrowserRouter >
    )
}

export default App