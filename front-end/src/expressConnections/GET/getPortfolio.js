import { useState, useEffect } from 'react'
import axios from 'axios'
import PortfolioTable from "../../components/PortfolioTable"
import Table from '../../components/TransTable'

const GetPortfolio = () => {
  const [messages, setMessages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [transTableData, setTransTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "QUANTITY"])
  const [transColumns, setTransColumns] = useState(["SYMBOL", "TYPE", "QUANTITY", "DATE"])

  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))

  const fetchMessages = () => {
    axios
      
      .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/portfolio`,{
        user: user_name
      })
      .then(response => {
 
        const allCoins = response.data.allCoins
        const allTrans = response.data.allTrans

        let cryptoTableData = [];
        let transTableData = [];
    
        allCoins.map((element) => {
          cryptoTableData.push ({
            symbol: element.symbol,
            quantity: element.quantity,
          })
        })

        console.log(cryptoTableData);

        setCryptoTableData(cryptoTableData);

        allTrans.map((element) => {
          transTableData.push ({
            symbol: element.symbol,
            type: element.type,
            quantity: element.quantity,
            timestamp: element.timestamp
          })
        })

        setTransTableData(transTableData);
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    fetchMessages()

    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 5000)

    return e => {
      clearInterval(intervalHandle)
    }
  }, []) 

  return (
    <>
          
      <br></br>
      <br></br>
      <br></br>

      <h3 className="text">Coins:</h3>
      <PortfolioTable data={cryptoTableData} columns={tableColumns}/>
      <h3 className="text">Transactions:</h3>
      <Table data={transTableData} columns={transColumns}/>
    </>
  )
}

// make this component available to be imported into any other file
export default GetPortfolio