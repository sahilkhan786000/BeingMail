
import { Drawer, styled } from "@mui/material";

import SideBarContent from "./SideBarContent";

const StyledDrawer = styled(Drawer)`
    margin-top: 100px;
`

const SideBar = ({openDrawer}) => {

   

    return (
        <StyledDrawer
            anchor='left'
            open={openDrawer}
           // onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: 250,
                    borderRight: 'none',
                    background: '#1976d2',
                    marginTop: '90px',
                    height: 'calc(100vh - 90px)'
                },
            }}
          >
            <SideBarContent />
        </StyledDrawer>
    )
}

export default SideBar;