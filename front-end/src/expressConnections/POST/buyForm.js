import { useState } from 'react'
import axios from 'axios'

/**
 * A React component that represents a form the user can fill out to create and post a new Message.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const BuyForm = ({ setError, setFeedback, addMessageToList }) => {
  // create a state variable for each form field
  const [crypto, setName] = useState('')
  const [quantity, setMessage] = useState('')
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [email, setEmail] = useState(localStorage.getItem("user").email)
  const [username, setUsername] = useState(localStorage.getItem("user").user_name)
  const [realName, setrealName] = useState(localStorage.getItem("user").your_name)
  /**
   * A nested function that is called when the user submits the form to save a new Message.
   * @param {*} e
   */
  const submitForm = e => {
    e.preventDefault() // prevent normal browser submit behavior

    // send data to server... getting server host name from .env environment variables file to make it easy to swap server hosts in one place
    axios
      // post new message to server
      .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/buy`, {
        crypto: crypto,
        quantity: quantity,
      })

      /* .post("/whoami", {
        name: name,
        message: message,
      }) */

      .then(response => {
        // setFeedback(`ooh la la: ${data}`)
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