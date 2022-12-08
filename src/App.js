import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Deal from './common/components/deal';
import Deals from './pages/deals';
import Search from './pages/search';
import Login from './pages/login';
import SignUp from './pages/signup';
import ProductDetail from './pages/product-detail';
import Checkout from './pages/checkout';


// const dealData = JSON.stringify(jsonObj);
const jsonObj = [{
  "internalName": "RPGINABOX",
  "title": "RPG in a Box",
  "metacriticLink": "/game/pc/rpg-in-a-box",
  "dealID": "V77Siaj1yQHage5d1Y%2FcfjS5KlJXtTGzSZLea62bjTc%3D",
  "storeID": "25",
  "gameID": "204115",
  "salePrice": "0.00",
  "normalPrice": "29.99",
  "isOnSale": "1",
  "savings": "100.000000",
  "metacriticScore": "0",
  "steamRatingText": null,
  "steamRatingPercent": "0",
  "steamRatingCount": "0",
  "steamAppID": null,
  "releaseDate": 1669852800,
  "lastChange": 1669915734,
  "dealRating": "10.0",
  "thumb": "https://hb.imgix.net/2b75867efc6fbf26e627b5682eb6d4e567738014.jpg?auto=compress,format&fit=crop&h=84&w=135&s=2410f956971dbed3b040b83bc4152cc7"
  },
  {
    "internalName": "RPGINABOX",
    "title": "RPG in a Box",
    "metacriticLink": "/game/pc/rpg-in-a-box",
    "dealID": "V77Siaj1yQHage5d1Y%2FcfjS5KlJXtTGzSZLea62bjTc%3D",
    "storeID": "25",
    "gameID": "204115",
    "salePrice": "0.00",
    "normalPrice": "29.99",
    "isOnSale": "1",
    "savings": "100.000000",
    "metacriticScore": "0",
    "steamRatingText": null,
    "steamRatingPercent": "0",
    "steamRatingCount": "0",
    "steamAppID": null,
    "releaseDate": 1669852800,
    "lastChange": 1669915734,
    "dealRating": "10.0",
    "thumb": "https://hb.imgix.net/2b75867efc6fbf26e627b5682eb6d4e567738014.jpg?auto=compress,format&fit=crop&h=84&w=135&s=2410f956971dbed3b040b83bc4152cc7"
    },
    {
      "internalName": "RPGINABOX",
      "title": "RPG in a Box",
      "metacriticLink": "/game/pc/rpg-in-a-box",
      "dealID": "V77Siaj1yQHage5d1Y%2FcfjS5KlJXtTGzSZLea62bjTc%3D",
      "storeID": "25",
      "gameID": "204115",
      "salePrice": "0.00",
      "normalPrice": "29.99",
      "isOnSale": "1",
      "savings": "100.000000",
      "metacriticScore": "0",
      "steamRatingText": null,
      "steamRatingPercent": "0",
      "steamRatingCount": "0",
      "steamAppID": null,
      "releaseDate": 1669852800,
      "lastChange": 1669915734,
      "dealRating": "10.0",
      "thumb": "https://hb.imgix.net/2b75867efc6fbf26e627b5682eb6d4e567738014.jpg?auto=compress,format&fit=crop&h=84&w=135&s=2410f956971dbed3b040b83bc4152cc7"
      }]
      // console.log(jsonObj);
function App() {
  const newArr = jsonObj.map(object => <Deal gameID={object.gameID} title={object.title} thumb={object.thumb}/>)
  // console.log(newArr)
  return (
    
   <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/checkout/:gameId' element= {<Checkout />} />
        <Route path='/game/:gameTitle/:gameId' element={<ProductDetail />}/>
        {/* <Route path='/game/:gameTitle/:gameId/:dealID' element={<Redirect />}/> */}
        {/* <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<ProductList />} /> */}
        {/* <Route
          path='/products/:productName/:productId'
          element={<ProductDetail />} 
        /> */}
         {/* <Deal data = {jsonObj}/> */}
      {/* {newArr}   */}
      {/* <Deals /> */}
      </Routes>

      </>
      
     
      
   
  );
}

export default App;
