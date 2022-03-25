import './Learn.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet, Link } from "react-router-dom"
import Video from './Video'
import Article from './Article'
import Navbar from "../../Navbar";

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Learn = props => {
    return (
        <main className="Learn">
            {<Navbar/>}
            <h1>Tutorials and Bitcoin Basics</h1>
            <h4>Get practical, step-by-step answers to all things crypto</h4>
            {<Article/>}
            {<Video/>}
        </main>
      )
}

export default Learn