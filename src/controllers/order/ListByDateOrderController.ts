import { Request, Response } from "express";
import { ListByDateOrderService } from "../../services/order/ListByDateOrderService";

class ListByDateOrderController {
    async handle(req: Request, res: Response) {
        const date = req.query.atualizado_em as string;
        const listByDate = new ListByDateOrderService();
        const order = await listByDate.execute({ date });
        return res.json(order);
    }
}

export { ListByDateOrderController }