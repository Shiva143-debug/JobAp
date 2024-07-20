import './index.css'
import Header from '../Header';

const NotFound = () => (
  <>
  <Header/>
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
      alt="not found"
      className="not-found-img"
    />
    <h1 className="notfound-head">Page Not Found</h1>
    <p className="notfound-para">
      We are sorry! Network issue Once Refresh the page.
      once click logout and login again.
    </p>
  </div>
  </>
)

export default NotFound
