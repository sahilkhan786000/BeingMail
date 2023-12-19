import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "948928666031-0lt8hmp6t35n241unve74gnl061hcnpd.apps.googleusercontent.com"; // Replace with your actual Google Client ID

export default function LogOutGoogle() {
   
    const navigate = useNavigate();

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => {
      console.log('Logout successful');
      // Perform any additional cleanup or actions on logout if needed
      localStorage.removeItem('email');
      localStorage.removeItem('authToken');
      navigate('/');
    },
    onFailure: () => {
      console.log('Logout failed');
    },
  });

  return (
    <div onClick={signOut} style={{ cursor: 'pointer' }}>
      Logout
    </div>
  );
}
