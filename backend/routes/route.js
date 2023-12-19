import express from 'express';
import { body } from "express-validator";

import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
    moveEmailsToBin , createUser, loginUser} from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

routes.post('/createuser', [
    body("email").isEmail(),
    body("firstname").isLength({ min: 5 }),
    body("lastname").isLength({ min: 2 }),
    body("password", "Incorrect Password").isLength({ min: 5 })
  ], createUser);


routes.post('/loginuser', [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ], loginUser);

export default routes;