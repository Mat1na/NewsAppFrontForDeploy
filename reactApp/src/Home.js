import React from 'react'
import { Col} from "react-bootstrap";
import Countries from './data/countries.json'
import { Link } from 'react-router-dom'


function Home() {
  

  return (
 
    <>
      <div>
        <h1 className='text-light'>Here you will find the top news from all around the World!</h1>
        <smal  className='text-light'><em className='text-light'>Choose your country of interest and find out the top Headlines</em></smal>
        <div className='home-list m-4'>
        {Countries.map((country) => (
          <>
            <Col>
            <Link to={`country/${country.code}`}
              key={country.code}
              className="dropdown-item text-decoration-none home-countries-list"
              value={country.code}  >
              {country.name}
            </Link>
            </Col>
        
          </>
        ))}
        </div>
      </div>
    </>
  )
}

export default Home