import "../css/CryptoTable.css";
import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function CryptoTable(props) {
    var coin = "";
    const select = (Tr) => {
        const curr = Tr.currentTarget;
        const allRows = curr.parentElement.children;
        if ( curr.classList.contains('selected') ) {
            curr.classList.remove('selected');
        }else{
            for (let i = 0; i < allRows.length; i++) {
                allRows[i].classList.remove('selected');
              }
            curr.classList.add('selected');
        }
        coin = curr.children[0].textContent.slice(6);
        console.log(coin);
    }
    
    return (
        <>
        <Table>
            <Thead>
                <Tr>
                {props.columns.map((columns, index) => (  
                    <Th>{columns}</Th>
                ))}  
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map((crypto, index) => (  
                <Tr data-index={index} onClick = {select}>  
                    <Td id='symbol'>{crypto.symbol}</Td>  
                    <Td>{crypto.name}</Td>  
                    <Td>{crypto.rank}</Td>  
                    <Td>{crypto.price}</Td>
                    <Td>{crypto.market_cap}</Td>   
                </Tr>  
                ))}  
            </Tbody>
        </Table>
        </>
    )
}

export default CryptoTable;