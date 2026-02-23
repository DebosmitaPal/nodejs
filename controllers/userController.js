import {users} from "../models/userModel.js"
 const getUsers = (req, res) => {
  res.json(users);
};

 const createUser = (req, res) => {
  res.send("This is post request");
};
export {getUsers,createUser}