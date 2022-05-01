import { useState, useEffect } from 'react'
import axios from 'axios'
import CryptoTable from "../../components/CryptoTable"

const GetBuy = () => {
  const [messages, setMessages] = useState([])
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "NAME", "RANK", "PRICE", "MARKET CAP"])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')

  const fetchMessages = () => {

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


        /* let wanted_1 = "Bitcoin";
        let wanted_2 = "Tether";

        function filterByCoin(check_coin) {
          if ( check_coin.name == wanted_1 || check_coin.name == wanted_2) {
            return true
          }
        }
        
        let filteredCryptoTableData = cryptoTableData.filter(filterByCoin) */

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

    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 500000000000000)

    return e => {
      clearInterval(intervalHandle)
    }
  }, []) 

  return (
    <>

    <br></br>
    <CryptoTable data={cryptoTableData} columns={tableColumns}/>
    Buy Crypto: {messages.crypto}
    <br></br>
    Buy Quantity: {messages.quantity}
    </>
  )
}

export default GetBuy