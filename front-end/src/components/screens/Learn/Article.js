import "bootstrap/dist/css/bootstrap.min.css"
import blockchain from './blockchain.png'

const Article = props => {
    return (
        <>
            <div>
                <h4>Article: Intro to Blockchain</h4>
                <a href = "https://www.investopedia.com/terms/b/blockchain.asp">
                    <img src= {blockchain} class="img-fluid" alt="What is Blockchain?"/>
                </a>
            </div> 
        </>
      )
}

export default Article