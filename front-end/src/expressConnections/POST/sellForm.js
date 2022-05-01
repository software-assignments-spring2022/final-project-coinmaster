import { useState } from 'react'
import axios from 'axios'

const SellForm = ({ setError, setFeedback, addMessageToList }) => {
  // create a state variable for each form field
  const [crypto, setName] = useState('')
  const [quantity, setMessage] = useState('')

  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))

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
        addMessageToList(response.data.message)
      })
      .catch(err => {
        setError(`error error error! ${err}`)
      })

    // clear form
    setName('')
    setMessage('')
  }

  return (
    <form className="MessageForm-form" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Sell Stock"
        value={crypto}
        onChange={e => setName(e.target.value)}
      />
        <input
        type="text"
        placeholder="Sell Quantity"
        onChange={e => setMessage(e.target.value)}
        value={quantity}
      />
      <input type="submit" disabled={!crypto || !quantity} value="Sell" />
    </form>
  )
}

// make this component available to be imported into any other file
export default SellForm