import express from 'express';
import productController from '../controllers/product';
import categoriesController from '../controllers/categories';
import promotionController from '../controllers/promotion';
import ordersController from '../controllers/orders';
import usersController from '../controllers/users';

const router = express.Router();

/** Products here */
router.get('/all_product', productController.getAllProduct);
router.get('/product_review', productController.getProductReview);
router.get('/product', productController.getProductWithType);
router.get('/productById', productController.getProductById);
router.post('/insert_product', productController.productInsert);
router.get('/delete_product', productController.productDelete);
router.post('/update_product', productController.productUpdateInfo);

/** Categories here */
router.get('/all_categories', categoriesController.getAllCategories);
router.get('/categories_bag', categoriesController.getAllCategoriesBag);
router.get('/categories_shoes', categoriesController.getAllCategoriesShoes);

/** Promotion here */
router.get('/all_promotion', promotionController.getAllPromotion);
router.get('/delete_promotion', promotionController.promotionDelete);
router.post('/insert_promotion', promotionController.promotionInsert);
router.get('/getPromotionById', promotionController.getPromotionById);

/** Orders here */
router.get('/orders', ordersController.getAllOrder);
router.get('/order_list', ordersController.getOrderList);
router.get('/order', ordersController.getOderWithUser);
router.get('/order2', ordersController.getOder);
router.post('/insert_order', ordersController.orderInsert);
router.get('/delete_order', ordersController.orderDelete);

/** Users here */
router.get('/all_users', usersController.getAllUser);
router.get('/userposion', usersController.getUserPosition);
router.get('/user', usersController.getUserById);
router.get('/delete_user', usersController.userDelete);
router.post('/update_user', usersController.userUpdateInfo);
router.post('/insert_user', usersController.userInsert);
router.post('/auth', usersController.getUserByUsernamePassword);

export = router;
