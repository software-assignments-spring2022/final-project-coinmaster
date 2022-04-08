import { useState, useEffect } from 'react';
import axios from 'axios';
import Compare from "../../Compare.js"


const CompareData = () => {
  const [messages, setMessages] = useState([])
  const [names, setNames] = useState([]);
  const [error, setError] = useState('')


//A nested function that fetches messages from the back-end server.
  const fetchData = () => {
   
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/compare`)
      .then(response => {
        
        const messages = response.data.messages;
        setMessages(messages);
        const names = response.data.names;
        setNames(names);
      })
      .catch(err => {
        setError(err)
      })
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchData()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchData()
    }, 10000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    } 
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
      <>
        <Compare />
      </>
    
  )
}

export default CompareData