import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { useState, useEffect } from 'react';


function Button (coin, setCoin, coinNames){

     /* const [coinNames, setCoinNames] = useState([]);
    const [error, setError] = useState(''); */

   // const fetchData = () => {
   
        /* axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/compare`)
          .then(response => {
            
            const coinNames = response.data.names;
            setCoinNames(coinNames);
          })
          .catch(err => {
            setError(err)
          })
      } */

   /*    useEffect(() => {
        fetchData()
    
        const intervalHandle = setInterval(() => {
          fetchData()
        }, 10000)
    
        return e => {
          
          clearInterval(intervalHandle)
        } 
      }, [])  */
    

 
    return (

        <div class = "dropdown">
        <Dropdown>
            <Dropdown.Toggle variant="dark">
                    {coin}
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
        
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[0]}</div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[1]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[2]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[3]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[4]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[5]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[6]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[7]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[8]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>{coinNames[9]} </div></Dropdown.Item>
                        
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Button;
