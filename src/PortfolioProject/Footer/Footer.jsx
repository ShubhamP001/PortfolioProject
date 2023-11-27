import './Footer.css'


const Footer = () => {
  return (
    <div>
        <footer id='footerSection'>
        <div className="footer1">
            <h1>GET IN TOUCH</h1>
            <p>shubham101101patil@gmail.com</p>
            <p>+911234567891</p>
        </div>
        
        <div className="footer2">
            <button id='btn'><a href="#">Movie Website</a></button>
            <button id='btn'><a href="#">Ecom Website</a></button>
            <button id='btn'><a href="#">Videocalling Website</a></button>
            <button id='btn'><a href="#">Pixaby Website</a></button>
            <button id='btn'><a href="#">Contact Website</a></button>
            <button id='btn'><a href="#">B'day Website</a></button>
            <button id='btn'><a href="#">Weather Website</a></button>
            <button id='btn'><a href="#">Piano Website</a></button>
        </div>
        <div className="footer3">
            <div><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-twitter"></i></div>
            <p>@copywrite Shubham</p>
        </div>
        </footer>
      
    </div>
  )
}

export default Footer
