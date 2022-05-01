import { useState, useEffect } from 'react'
import axios from 'axios'
import CryptoTable from "../../components/CryptoTable"
import "../../css/Portfolio.css"

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

        setCryptoTableData(cryptoTableData);
      })
      
      .catch(err => {
        setError(err)
      })
  }
    useEffect(() => {
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
    <div id="table">
    <CryptoTable data={cryptoTableData} columns={tableColumns}/>
    </div>
    <br></br>
    </>
  )
}

export default GetBuy