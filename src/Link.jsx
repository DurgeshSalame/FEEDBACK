
import { Link } from 'react-router-dom'

function Connect() {
    return (
        <>
            <li>
                <Link to='/Home'>Home</Link>
            </li>
            <li>
                <Link to='/Research'>Research</Link>
            </li>
            <li>
                <Link to='/Review' >Review</Link>
                </li>
            {/* <li>
                <Link to='/Link' >Review</Link>
                </li> */}

        </>
    )
}
export default Connect
