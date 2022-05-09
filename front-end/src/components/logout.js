

import React from "react";
import { useEffect } from "react"

const Logout = props => {

    const handleLogout = () => {
        console.log("User is logged out.")

            // SHOULD LOG OUT BE HERE?

            localStorage.removeItem('user')
            localStorage.removeItem('email')
            localStorage.removeItem('user_name')
            localStorage.removeItem('your_name')
            localStorage.removeItem('loggedIn')
        
             window.location.href = '/login'
      };
    
    return (<>
        
        {handleLogout()}
    
    </>)
}
export default Logout