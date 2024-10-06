import  express  from 'express';
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { addProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'
import { updateCategoryController } from '../controllers/categoryController.js';
const router = express.Router()
router.post('/add-product',requireSignIn,isAdmin,formidable(),addProductController)
router.post('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateCategoryController)

router.get('/get-product',getProductController)
router.get('/get-product/:slug',getSingleProductController)
router.get('/product-photo/:pid',productPhotoController)
router.delete('/product/:pid',deleteProductController)

router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);
export default router
