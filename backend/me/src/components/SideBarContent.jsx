import { useState } from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import ComposeMail from './ComposeMail';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { CreateOutlined } from '@mui/icons-material';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

const Container = styled(Box)`
  padding: 20px 0 0 30px ;
  & > ul {
    padding: 15px 0 0 15px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    & > a {
      text-decoration: none;
      color: white;
      
    }
    & > a > li > svg {
      margin-right: 20px;
    }
  }
`;

const ComposeButton = styled(Button)`
  /*background: #c2e7ff;*/
  background : white;
  color: #1976d2;
  border-radius: 16px;
  padding: 15px;
  min-width: 140px;
  text-transform: none;
  
`;


const SideBarContent = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const { type } = useParams();

  const onComposeClick = () => {
      setOpenDialog(true);
  }

  return (
      <Container>
          <ComposeButton onClick={() => onComposeClick()}>
              <CreateOutlined style={{ marginRight: 10 }} />Compose
          </ComposeButton>
          <List>
              {
                  SIDEBAR_DATA.map(data => (
                      <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                          <ListItem style={ type === data.name.toLowerCase() ? {
                              backgroundColor: '#d3e3fd',
                              borderRadius: '0 16px 16px 0'
                          } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                      </NavLink>
                  ))
              }
          </List>
          <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Container>
  )
}

export default SideBarContent;