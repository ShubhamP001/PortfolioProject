import './Navbar.css'
const Navbar = () => {
  
  function lightMode() {
    const a=document.getElementById("navbar1");
    const b=document.getElementById("skillsSection");
    const c= document.getElementById("footerSection");

    a.style.background="white";
    a.style.color="black";
    b.style.background="white";
    b.style.color="black";
    c.style.background="white";
    c.style.color="black";
  }
  function darkMode() {
    const a=document.getElementById("navbar1");
    const b=document.getElementById("skillsSection");
    const c= document.getElementById("footerSection");

    a.style.background="black";
    a.style.color="white";
    b.style.background="black";
    b.style.color="white";
    c.style.background="black";
    c.style.color="white";
  }
 

  return (
    <div>
        <nav id='navbar1'>
                <div className="logo"><h1>SP</h1></div>
                <div className="title">
                    <div>Home</div>
                    <div>About</div>
                    <div>Project</div>
                    <div>Contact</div>
                </div>
                <div className="media"><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-twitter"></i></div>
                <button id='mode' onClick={lightMode}>Light Mode</button>
                <button id='mode' onClick={darkMode}>Dark Mode</button>

        </nav>
      
    </div>
  )
}

export default Navbar
