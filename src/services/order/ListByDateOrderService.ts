import prismaClient from "../../prisma";

class ListByDateOrderService {
    async execute({ date }) {
        let nextdate = new Date(date);
        nextdate.setDate(nextdate.getDate() + 1)

        const order = await prismaClient.pedido.findMany({
            where: {
                status: false,
                atualizado_em: {
                    gte: new Date(date),
                    lt: nextdate
                }
            }
        })
        return order;
    }
}

export { ListByDateOrderService }