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

  const isUserAdmin = () => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'user_type' && value === 'admin') {
        return true;
      }
      setCookie("user_type","user",23)
    }
    return false;
  };

  console.log(process.env.REACT_APP_CONSOLE1)
   const handleContextMenu = (e) => {
    e.preventDefault();
  };
  setCookie("flag",process.env.REACT_APP_COOKIE,23)
  fetch("https://api.npoint.io/a36172839e55efa040bc")
  
 return(
    <div onContextMenu={handleContextMenu}>
    <Index />
    <h1>{isUserAdmin ? "User is Admin":"User is normal user"}</h1>
    <About1/>
    <Footer/>
    </div>
  )
}
export default App        