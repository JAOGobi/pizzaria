import { Router } from "express";

import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./services/user/middlewares/IsAuthenticated";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { SendOrderController } from "./controllers/order/SendOrderController"; 
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { ListByDateOrderController } from "./controllers/order/ListByDateOrderController";
import { ListByDateOrderFinishController } from "./controllers/order/ListByDateOrderFinishController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { CloseOrderController } from "./controllers/order/CloseOrderController";

const router: Router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/delete/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.delete('/delete/item', isAuthenticated, new RemoveItemController().handle);
router.get('/order/date', isAuthenticated, new ListByDateOrderController().handle);
router.get('/order/date/finish', isAuthenticated, new ListByDateOrderFinishController().handle);
router.get('/order/finish', isAuthenticated, new FinishOrderController().handle);
router.get('/order/close', isAuthenticated, new CloseOrderController().handle);

export { router };

//1 remover id do item e pedido, select com inner join if pedido.rascunho = true (deletar)
//2 select status = false
//3 select status = true
//4
//5 select dados do pedido (id) inner join com quantidade e preço