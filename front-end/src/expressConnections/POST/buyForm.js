import { useState } from 'react'
import axios from 'axios'

const BuyForm = ({ setError, setFeedback, addMessageToList }) => {
  const [crypto, setName] = useState('')
  const [quantity, setMessage] = useState('')
  const [user, setUser] = useState(localStorage.getItem("user"))
 const [email, setEmail] = useState(localStorage.getItem("email"))
 const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
 const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
 const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))

  const submitForm = e => {
    e.preventDefault() 
    axios
      // post new message to server
      .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/buy`, {
        crypto: crypto,
        quantity: quantity,
        user: user_name
      })

      .then(response => {
        console.log(user_name)
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
        placeholder="Buy Crypto"
        value={crypto}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Buy Quantity"
        onChange={e => setMessage(e.target.value)}
        value={quantity}
      />
      <input type="submit" disabled={!crypto || !quantity} value="Buy" />
    </form>
  )
}

// make this component available to be imported into any other file
export default BuyForm