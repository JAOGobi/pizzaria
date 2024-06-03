import prismaClient from "../../prisma";

export default class CloseOrderService {
    async execute(id: string) {
        const itemsPedido = await prismaClient.item.findMany({
            where: {
                id: id
            },
            include: {
                fk_item_produto: true,
                fk_item_pedido: true
            }
        });

        let total = 0;
        itemsPedido.forEach(item => {
            let valor = parseFloat(item.fk_item_produto.preco)
            let quantidade = (item.quantidade)
            total += (quantidade * valor);
        });
        return { itemsPedido, total };
    }
}