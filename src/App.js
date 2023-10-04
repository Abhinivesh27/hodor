import About1 from "./about"
import Footer from "./footer"
import Index from "./hero"
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}
function App( ){

  console.log(process.env.REACT_APP_CONSOLE1)
   const handleContextMenu = (e) => {
    e.preventDefault();
  };
  setCookie("flag",process.env.REACT_APP_COOKIE,23)
  fetch("https://api.npoint.io/a36172839e55efa040bc")
  
 return(
    <div onContextMenu={handleContextMenu}>
    <Index/>
    <About1/>
    <Footer/>
    </div>
  )
}
export default App        