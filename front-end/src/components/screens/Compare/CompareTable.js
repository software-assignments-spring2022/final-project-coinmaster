import "../../../css/CryptoTable.css";
import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


function CompareTable(props) {
  
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
                <Tr>
                    <Td id='symbol'>{props.data.symbol}</Td>  
                    <Td>{props.data.name}</Td>  
                    <Td>{props.data.rank}</Td>  
                    <Td>{props.data.price}</Td>
                    <Td>{props.data.market_cap}</Td>   
                </Tr>  
            </Tbody>
        </Table>
        </>
    )
}

export default CompareTable;