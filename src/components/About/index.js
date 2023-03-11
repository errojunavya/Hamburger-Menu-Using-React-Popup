// Write your code here
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
        className="mobile-image"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
        className="desktop-image"
      />
    </div>
  </div>
)
export default About
