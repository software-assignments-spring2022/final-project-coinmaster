import { useState } from 'react'
import axios from 'axios'

const BuyForm = ({setFeedback, addMessageToList }) => {
  const [crypto, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [user, setUser] = useState(localStorage.getItem("user"))
 const [email, setEmail] = useState(localStorage.getItem("email"))
 const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
 const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
  const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))
  const [success, setSuccess] = useState(true)
  const [error, setError] = useState(true)
  const [message, setMessage] = useState(true)

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
        setSuccess(response.data.success);
        setMessage(response.data.message);
      })
      .catch(err => {
        setError(`error error error! ${err}`)
      })

    // clear form
    setName('')
    setQuantity('')
  }

  return (
    <div>
    <form className="MessageForm-form" onSubmit={submitForm}>
      <input
          type="text"
          placeholder="Buy Crypto"
          value={crypto}
          onChange={e => setName(e.target.value)}
          onKeyPress={(event) => {
            if (!/[a-zA-Z ]/i.test(event.key)) {
              event.preventDefault();
            }
          }}
          
      />
      <input
        type="text"
        placeholder="Buy Quantity"
        onChange={e => setQuantity(e.target.value)}
        value={quantity}  
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) { event.preventDefault(); }
          }}
      />
      <input type="submit" disabled={!crypto || !quantity} value="Buy" />
    </form>

      {message}
      </div>
  )
}

// make this component available to be imported into any other file
export default BuyForm