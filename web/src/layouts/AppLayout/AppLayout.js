import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <div>
      <h1>Streaming Auction Market Place</h1>
      {/* <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav> */}
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
