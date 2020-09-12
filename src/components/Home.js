import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      {/*Product Id, title,price, rating, image*/}
      <div className='home__row'>
        <Product
          id='12345'
          title='The Learn StartUP: How Constant Innovation Creates Radically Successful Businesses Paperback'
          price={70}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />

        <Product
          id='123456'
          title='Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)'
          price={743}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61fv4VZRQ7L._SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='123457'
          title='The Learn StartUP: How Constant Innovation Creates Radically Successful Businesses Paperback'
          price={540}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg'
        />

        <Product
          id='123459'
          title='Apple iPhone 11 (64GB) - Black'
          price={918}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1234510'
          title='Realme X3 (Arctic White, 128 GB) (8 GB RAM)'
          price={351}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71wOrxgmUkL._SL1500_.jpg'
        />

        <Product
          id='1234511'
          title='Apple iPhone 11 Pro Max (64GB) - Midnight Green'
          price={1554}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg'
        />

        <Product
          id='1234512'
          title='Apple iPhone XR (64GB) - Black'
          price={689}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
