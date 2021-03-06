import './components/screens/Learn/Learn.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet, Link } from "react-router-dom"
import Video from './components/screens/Learn/Video'
import Article from './components/screens/Learn/Article'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Learn = props => {
    return (
        <main className="Learn">
            <br></br>
            <h1>Tutorials and Bitcoin Basics</h1>
            <h3>Get practical, step-by-step answers to all things crypto</h3>
            <br></br>
            {<Video />}
            <br></br>
            {<Article />}
        </main>
      )
}

export default Learn