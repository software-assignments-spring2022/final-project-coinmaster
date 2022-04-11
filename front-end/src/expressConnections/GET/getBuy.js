import { useState, useEffect } from 'react'
import axios from 'axios'
import CryptoTable from "../../components/CryptoTable"

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */


const GetBuy = () => {
  const [messages, setMessages] = useState([])
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "NAME", "RANK", "PRICE", "MARKET CAP"])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchMessages = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/buy`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const messages = response.data

        let cryptoTableData = [];
    
        messages.cryptoData.map((element) => {
          cryptoTableData.push ({
            symbol: element.symbol,
            name:element.name,
            rank: element.rank,
            price: element.price,
            market_cap:element.market_cap
          })
        })


        let wanted_1 = "Bitcoin";
        let wanted_2 = "Tether";

        function filterByCoin(check_coin) {
          if ( check_coin.name == wanted_1 || check_coin.name == wanted_2) {
            return true
          }
        }
        
        let filteredCryptoTableData = cryptoTableData.filter(filterByCoin)

        setCryptoTableData(cryptoTableData);
        //setCryptoTableData(filteredCryptoTableData);
        setMessages(messages)

        //setCryptoTableData(messages.cryptoData);
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
    }, 500000000000000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
    
{/*       {messages.cryptoData}
      <br></br> */}

    <br></br>
    <CryptoTable data={cryptoTableData} columns={tableColumns}/>
    Buy Crypto: {messages.crypto}
    <br></br>
    Buy Quantity: {messages.quantity}
    </>
  )
}

// make this component available to be imported into any other file
export default GetBuy