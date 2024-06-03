import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const id_item = req.query.id_item as string;
        const removeItemService = new RemoveItemService();
        const order = await removeItemService.execute({ id_item });
        return res.json(order);
    }
}

export { RemoveItemController }