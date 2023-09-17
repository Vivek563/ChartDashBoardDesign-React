
import "./App.css";
import Home from "./pages/home/Home";
import Signin from "./components/SignInPage/Signin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="644281587104-pg4pn98sn4g7n25ekrbrtfkmbp9s6v61.apps.googleusercontent.com">
      <Signin/>
    </GoogleOAuthProvider>


     
      
    </>
  );
}

export default App;
