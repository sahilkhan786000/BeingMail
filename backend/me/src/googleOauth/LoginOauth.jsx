import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom';



export default function LoginOauth() {
  const navigate = useNavigate();
  window.googleEmail = ""
  const handleGoogleLoginSuccess = (credentialResponse ) =>{
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    window.googleEmail = credentialResponseDecoded.email;
    navigate("/main");
  }

   
  return (
    <div>
    <GoogleOAuthProvider clientId="948928666031-0lt8hmp6t35n241unve74gnl061hcnpd.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => console.log("Login Failed")}
        />
      </GoogleOAuthProvider>
    </div>
  )
}


