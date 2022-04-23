import { useState, useEffect } from 'react'
import axios from 'axios'

import PortfolioTable from "../../components/PortfolioTable"

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const GetPortfolio = () => {
  const [messages, setMessages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "BUY PRICE", "QUANTITY"])

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchMessages = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/portfolio`)
      .then(response => {
        // axios bundles up all response data in response.data property
 
        const messages = response.data

        let cryptoTableData = [];

        // element.changeTHIS (to what we end up calling these things)
    
        messages.map((element) => {
          cryptoTableData.push ({
            symbol: element.symbol,
            buyPrice: element.buyPrice,
            quantity: element.quantity,
          })
        })

        console.log(cryptoTableData);

        setCryptoTableData(cryptoTableData);
        //setMessages(messages)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchMessages()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
          
      <br></br>
      <br></br>
      <br></br>

      <PortfolioTable data={cryptoTableData} columns={tableColumns}/>
    </>
  )
}

// make this component available to be imported into any other file
export default GetPortfolio