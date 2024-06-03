import prismaClient from "../../prisma";

class ListByDateOrderFinishService {
    async execute({ date }) {
        let nextdate = new Date(date);
        nextdate.setDate(nextdate.getDate() + 1)

        const order = await prismaClient.pedido.findMany({
            where: {
                status: true,
                atualizado_em: {
                    gte: new Date(date),
                    lt: nextdate
                }
            }
        })
        return order;
    }
}

export { ListByDateOrderFinishService }