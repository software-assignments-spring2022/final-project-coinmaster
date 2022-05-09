import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { useState, useEffect } from 'react';
import CompareTable from "./CompareTable"  


function Comparison (props){
  const [tableColumns, setTableColumns] = useState(["SYMBOL","NAME","RANK","PRICE","MARKET CAP"]);


  function clickEvents(e, index){
    props.setCoin(e.target.textContent);
    props.setCoinTable(props.allCoins[index]);
  }
     
 
    return (

        <>
        <div class = "dropdown">
        <Dropdown>
            <Dropdown.Toggle variant="dark">
                    {props.coin}
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 0)}>{props.coinNames[0]}</div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 1)}>{props.coinNames[1]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 2)}>{props.coinNames[2]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 3)}>{props.coinNames[3]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 4)}>{props.coinNames[4]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 5)}>{props.coinNames[5]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 6)}>{props.coinNames[6]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 7)}>{props.coinNames[7]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 8)}>{props.coinNames[8]} </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> clickEvents(e, 9)}>{props.coinNames[9]} </div></Dropdown.Item>   
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <CompareTable data={props.coinTable} columns={tableColumns} />

        </>
        
    );
}

export default Comparison;
