import { useState, useEffect } from "react";
import Deal from "../../common/components/deal/index.jsx";
import Footer from "../../common/components/footer/index.jsx";
import NavbarMain from "../../common/components/navbar/index.jsx";
// import jsonObj from "../../common/constants/data.js";
import "./search.css";

export default function Search() {
  const[jsonObj, setJson] = useState([]);
  const [count,setCount] = useState(0);
  const [arr, setArr] = useState([]);
  useEffect(()=>{
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${query}`)
    .then(res=>res.json())
    .then(data=>setJson(data))}, [count])
  // const [searchArr, setArr] = useState([]);
  let searchBar = "searchBar";
  // let searchItem = "";

  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);

    // console.log(searchitem);
  }
  // function handleSearch() {
  //   let bool;
  //   let ind;
  //   jsonObj.map((object, index) => {
  //     if (query.toUpperCase() === object.title.toUpperCase()) {
  //       bool = true;
  //       ind = index;
  //     }
  //     return object;
  //   });
  //   console.log(jsonObj);

  //   setArr([
  //     <Deal
  //       gameID={jsonObj[ind].gameID}
  //       title={jsonObj[ind].title}
  //       thumb={jsonObj[ind].thumb}
  //       salePrice={jsonObj[ind].salePrice}
  //       normalPrice={jsonObj[ind].normalPrice}
  //     />,
  //   ]);
  // }
 
  
  // console.log(newArr)
  function handleSearch(){
    setCount(prevCount => prevCount+1)
    setArr(jsonObj.map(object => {
      return <Deal
        gameID={object.gameID}
        title={object.external}
        thumb={object.thumb}
        salePrice={object.cheapest}
        normalPrice={object.normalPrice}
      />}))
      console.log('clicked'); 
  }
  // console.log(jsonObj);
  return (
    <>
      <NavbarMain />
      <div className="container">
        <input
          type="text"
          id={searchBar}
          value={query}
          onChange={handleChange}
          
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <div className="results">

        {arr}
        </div>
      </div>
      <Footer />
    </>
  );
}
