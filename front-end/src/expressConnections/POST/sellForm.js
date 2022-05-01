import { useState } from 'react'
import axios from 'axios'
import "../../css/Portfolio.css"

const SellForm = () => {
  // create a state variable for each form field
  const [crypto, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
  const [success, setSuccess] = useState(true)
  const [error, setError] = useState(true)
  const [message, setMessage] = useState(true)

  const submitForm = e => {
    e.preventDefault() 

    axios
      // post new message to server
      .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/sell`, {
        crypto: crypto,
        quantity: quantity,
        user: user_name
      })

      .then(response => {
        setSuccess(response.data.success);
        setMessage(response.data.message);

      })
      .catch(err => {
        console.log(err)
        setError(`error error error! ${err}`)
      })

    // clear form
    setName('')
    setQuantity('')
  }


  return (
    <div>

    <form id="sellForm" className="MessageForm-form" onSubmit={submitForm}>
      <input 
        type="text"
        placeholder="Sell Stock"
        value={crypto}
        onChange={e => setName(e.target.value)}
        onKeyPress={(event) => {
          if (!/[a-zA-Z ]/i.test(event.key)) {
            event.preventDefault(); }
        }}
      />
        <input
        type="text"
        placeholder="Sell Quantity"
        onChange={e => setQuantity(e.target.value)}
        value={quantity}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) { event.preventDefault(); }
        }}
      />
      <input type="submit" disabled={!crypto || !quantity} value="Sell" />
      </form>
      
      <div className="text">
      {message}
      </div>

      </div>
  )
}

export default SellForm