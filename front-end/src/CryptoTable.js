import "./css/CryptoTable.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


function CryptoTable(props) {

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
                <Tr data-index={index}>  
                    <Td>{crypto.symbol}</Td>  
                    <Td>{crypto.name}</Td>  
                    <Td>{crypto.rank}</Td>  
                    <Td>{crypto.price}</Td>
                    <Td>{crypto.market_cap}</Td>  
                    <Td>{crypto.volume_24h}</Td>  
                    <Td>{crypto.delta_24h}</Td>   
                </Tr>  
                ))}  
            </Tbody>
        </Table>
        </>
    )
}

export default CryptoTable;