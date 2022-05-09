import React, { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/screens/Compare/Compare.css"
import Comparison from "./components/screens/Compare/Comparison";
import axios from "axios"


  function Compare(){

    //stores all coin objects
    const [messages,setMessage] = useState([]);

    //states for each coin, updated by button click
    const [coin1,setCoin1] = useState("Coin #1");
    const [coin2,setCoin2] = useState("Coin #2");

    //stores all coin names
    const [coinNames, setCoinNames] = useState([]);

    //states for each coin object selected, updated by button click
    const [coinTable1, setCoinTable1] = useState({});
    const [coinTable2, setCoinTable2] = useState({});
    

    const fetchData = () => {
   
      axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/compare`)
        .then(response => {

          const messages = response.data.messages;
          setMessage(messages);

          const coinNames = response.data.names;
          setCoinNames(coinNames);


        })
        .catch(err => {
          console.log("error")
        })
    }

    useEffect(() => {
      // fetch messages this once
      fetchData()
  
      // set a timer to load data from server every n seconds
      const intervalHandle = setInterval(() => {
        fetchData()
      }, 1000000000)
  
      // return a function that will be called when this component unloads
      return e => {
        // clear the timer, so we don't still load messages when this component is not loaded anymore
        clearInterval(intervalHandle)
      } 
    }, []) // putting a blank array as second argument will cause this function to run only once when component first loads


    return(
      <>
        <br></br>
        <br></br>
        <div className = 'compare'>
          <br></br>
          <br></br>
            
            <h3>Comparison Tool</h3>
            
            {/*Coin 1*/}
            <Comparison coin={coin1} setCoin={setCoin1} coinNames={coinNames} coinTable={coinTable1} setCoinTable = {setCoinTable1} allCoins={messages}/>

            <br></br>

            {/*Coin 2*/}
            <Comparison coin={coin2} setCoin={setCoin2} coinNames={coinNames} coinTable={coinTable2} setCoinTable = {setCoinTable2} allCoins={messages}/>

        </div>
        </>

    );
  }

export default Compare;