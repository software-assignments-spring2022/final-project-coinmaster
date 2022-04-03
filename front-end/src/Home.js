import home_pic_1 from "../src/media/home-pic-1.png";
import "./css/Home.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Home(props) {
  return (
    <>
      <div className="Home">
        <img src={home_pic_1} href="Home" />
        <div className="section">
          <h1>What is Coin Master?</h1>
          <p>
            For cryptocurrency invhoestors who need to track the prices and
            latest news of cryptocurrencies—CoinMaster is a website that is easy
            to build a portfolio and keep track of the crypto market.
          </p>
        </div>
        

        <Link to="/coins">
          <button type="button" class="btn btn-primary">
            Coins
          </button>
        </Link>

        <Link to="/compare">
          <button type="button" class="btn btn-primary">
            Compare
          </button>
        </Link>

        <Link to="/learn">
          <button type="button" class="btn btn-primary">
            Learn
          </button>
        </Link>

        <Link to="/portfolio">
          <button type="button" class="btn btn-primary">
            Portfolio
          </button>
        </Link>

        <div className="section">
          <h1>Get Started Here!</h1>
          <p>
            If you would like to start trading without any risk, create an
            account or login below. CoinMaster offers a free paper trading
            platform to learnt he ins and outs of crypto trading!
          </p>
        </div>

        <Link to="/register">
          <button type="button" class="btn btn-primary">
            Register
          </button>
        </Link>

        <Link to="/login">
          <button type="button" class="btn btn-primary">
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;