import "bootstrap/dist/css/bootstrap.min.css"
import blockchain from './blockchain.png'

import "./article.css"

const Article = props => {
    return (
        <>
            
            <h4>Article: Intro to Blockchain</h4>
            <div>
                <a href = "https://www.investopedia.com/terms/b/blockchain.asp">
                    <img src= {blockchain} class="img-fluid" alt="What is Blockchain?"/>
                </a>
            </div> 
        </>
      )
}

export default Article