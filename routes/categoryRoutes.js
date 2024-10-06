import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { AddCategoryController, categoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
const router = express.Router();

//routes
router.post("/add-category", requireSignIn, isAdmin, AddCategoryController);

router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController);

router.get('/get-category',categoryController)

router.get('/single-category/:slug',singleCategoryController)

router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)


export default router;
