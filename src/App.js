import About1 from "./about"
import Footer from "./footer"
import Index from "./hero"
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}
var a=10
function App( ){
  console.log("ATCTF{b4c1c_F14G}")
   const handleContextMenu = (e) => {
    e.preventDefault();
  };
  setCookie("flag"," ATCTF{N1C3_C00k13}",23)
  fetch("https://api.npoint.io/a36172839e55efa040bc")
  
 return(
    <div onContextMenu={handleContextMenu}>
    <Index />
    <About1/>
    <Footer/>
    </div>
  )
}
export default App        