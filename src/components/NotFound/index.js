// Write your code here
import Header from '../Header'

const NotFound = () => (
  <div className="container">
    <Header />
    <div className="container-2">
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found-image"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="para">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)
export default NotFound
