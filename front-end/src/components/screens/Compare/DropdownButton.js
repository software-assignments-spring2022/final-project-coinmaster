import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Button (coin, setCoin){

    return (

        <div class = "dropdown">
        <Dropdown>
            <Dropdown.Toggle variant="dark">
                    {coin}
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
        
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>Bitcoin BTC</div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>Ethereum ETH </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>Binance Coin </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>XRP XRP </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin(e.target.textContent)}>Coin CN </div></Dropdown.Item>
                        
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Button;
