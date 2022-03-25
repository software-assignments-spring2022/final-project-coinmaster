import Navbar from "../../Navbar";
import home_pic_1 from "../../../media/home-pic-1.png";
import home_pic_2 from "../../../media/home-pic-2.png";
import "./Home.css";

function Home(props){
    return (
        <>
            <Navbar/>
            <div className="Home">
            <img src={home_pic_1} href="Home"/>
            <div className="section">
                <h1>What is Coin Master?</h1>
                <p>For cryptocurrency invhoestors who need to track the prices and latest news of 
                    cryptocurrencies—CoinMaster is a website that is easy to build a portfolio and 
                    keep track of the crypto market.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg">Coins</button>
            <button type="button" class="btn btn-primary btn-lg">Compare</button>
            <button type="button" class="btn btn-primary btn-lg">Learn</button>
            <button type="button" class="btn btn-primary btn-lg">Portfolio</button>
            <div className="section">
                <h1>Get Started Here!</h1>
                <p>If you would like to start trading without any risk, create an account or login below.
                    CoinMaster offers a free paper trading platform to learnt he ins and outs of crypto trading!
                </p>
            </div>
            <img src={home_pic_2} href="Home"/>
            <button type="button" class="btn btn-primary btn-lg">Register</button>
            <button type="button" class="btn btn-primary btn-lg">Login</button>
        </div>
        </>
      )
}

export default Home;