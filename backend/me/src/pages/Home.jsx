import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'
import { useState, Suspense } from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';


const Wrapper = styled(Box)`
    display: flex;
`;

const Home = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    
    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <Wrapper>
                <SideBar openDrawer={openDrawer} />
                <Suspense fallback={<SuspenseLoader />} >
                    <Outlet context={{ openDrawer }} />
                </Suspense>
            </Wrapper>
       
        </>
    )
}

export default Home;