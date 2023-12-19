import React from 'react'
import '../index.css'
import {AppBar, Toolbar, InputBase, Box} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import url from '../constants/g.png';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

const clientId = "948928666031-0lt8hmp6t35n241unve74gnl061hcnpd.apps.googleusercontent.com"; // Replace with your actual Google Client ID

const txt = 'mAiL';

export default function Header({toggleDrawer}) {
  const navigate = useNavigate();

  const handleLogOut = () =>{
   
    navigate("/");
  }
  // const { signOut } = useGoogleLogout({
  //   clientId,
  //   onLogoutSuccess: () => {
  //     console.log('Logout successful');
  //     // Perform any additional cleanup or actions on logout if needed
  //     localStorage.removeItem('email');
  //     localStorage.removeItem('authToken');
  //     navigate('/');
  //   },
  //   onFailure: () => {
  //     console.log('Logout failed');
  //     navigate('/')
  //    alert("LogOut Failure");
  //   },
  // });


  return (
    <AppBar position = "static">
        <Toolbar>
            <MenuIcon  onClick= {toggleDrawer}/>
            <Box style = {{ display: 'flex', alignItems: 'center' }}> 
            <img src = {url} alt = "logo" style = {{width :110 ,height: 90, marginLeft :2}}/>
             {txt}
             </Box>
            <Box sx = {{
                backgroundColor:"#49dcf2",
                marginLeft : 30,
                minWidth : 690,
                maxWidth : 720,
                height : 48,
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-between',
                padding : '0 20px',
                borderRadius : '5px',
                '& > div':{
                  width : '100%',
                  padding : '0 10px'
                }

            }}>
            <SearchIcon/>
            <InputBase 
            placeholder = 'Search Emails'
             style={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}/>

            <TuneIcon/>

            </Box>

            <Box sx = {{

                width : '100%',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'end',
                '& > svg ' : {
                  marginLeft : 5
                }
               

            }}>
           
            </Box>
          
            <button className="m-3 btn btn-success" onClick={handleLogOut} >
            LogOut
          </button>
        </Toolbar>
    </AppBar>
  )
}
