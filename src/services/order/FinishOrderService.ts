import prismaClient from "../../prisma";

export default class FinishOrderService {
    async execute(id: string) {
        const order = await prismaClient.pedido.update({
            where: {
                id: id
            },
            data: {
                status: true
            }
        })
        return order;
    }
}

export { FinishOrderService }