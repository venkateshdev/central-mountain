import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <div>
      <h1>Streaming Auction Market Place</h1>

      <main>{children}</main>
    </div>
  )
}

export default AppLayout
