import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";

const {
   getUsers,
   getOneUser,
   postUser,
   updateUser,
   deleteUser,
 }  = userController

//rutas con controlador:
router.get("/", getUsers);
router.get("/id", getOneUser);
router.post("/", postUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
