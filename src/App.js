import React, { useState , useEffect} from "react";
import axios from "axios";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("ASC");




  useEffect(() => {
    async function getResults() {
      const results = await axios(`https://json-server-mocker-masai.herokuapp.com/candidates?_page=${page}&_limit=5_sort=views&_order=${order}`);
      setData(results.data)
      console.log(results)
    }
    getResults()
  },[page,setData,order])

  console.log(data);


  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={`Sort by ${order === "ASC" ? "Descending" : "Ascending"} Salary`} setOrder={setOrder} order={order}/>
        <Button title="PREV" id="PREV" setPage={setPage} page={page} disabled={page<=1}/>
        <Button id="NEXT" title="NEXT" setPage={setPage} page={page}/>
      </div>
      {data.map((item) => {
        return(
          <div className="maincard">
            <CandidateCard item={item} />
          </div>
        )
      })}
    </div>
  );
}
