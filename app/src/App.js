import './App.css';
import SignUp from "./components/signUp/signUp";
import LogIn from "./components/logIn/logIn";

function App() {
  return (
    <div className="App">
      <LogIn/>
        <Footer/>
    </div>
  );
}

const Footer = () => {
    return(
        <div className="footerOuter">
            <div className="footerInner">
                <img className="moraSpiritLogo" src="../media/moraSpiritLogo.png" alt=""/>
                <p className="moraSpiritTheme">MoraSpirit - Empowering University Sports in Sri Lanka | SLUG XlV</p>
                <p className="moraSpiritThemeMobile">MoraSpirit | SLUG XlV</p>
                <img className="slugLogo" src="../media/slugLogo.png" alt=""/>
            </div>
        </div>
    );
}


export default App;
