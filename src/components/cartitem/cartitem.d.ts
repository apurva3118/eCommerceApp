export interface ICartItemProps {
    item: {
        id: string;
        title: string;
        brand?: string;
        price: string;
        quantity?: number;
        image: any;
    };
}