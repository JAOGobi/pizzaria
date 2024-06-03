import { Request, Response } from "express";
import { ListByDateOrderFinishService } from "../../services/order/ListByDateOrderFinishService";

class ListByDateOrderFinishController {
    async handle(req: Request, res: Response) {
        const date = req.query.atualizado_em as string;
        const listByDate = new ListByDateOrderFinishService();
        const order = await listByDate.execute({ date });
        return res.json(order);
    }
}

export { ListByDateOrderFinishController }