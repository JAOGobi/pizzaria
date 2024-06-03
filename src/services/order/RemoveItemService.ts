import prismaClient from "../../prisma";

interface ItemRequest {
    id_item: string;
}

class RemoveItemService {
    async execute({ id_item }: ItemRequest) {
        const order = await prismaClient.item.delete({
            where: {
                id: id_item
            }
        })
        return order;
    }
}

export { RemoveItemService }