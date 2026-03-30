export interface ICartItemProps {
    item: {
        id: string;
        title: string;
        brand?: string;
        price: string;
        quantity?: number;
        image: any;
    };
    showtrack?: boolean;

    quantity?: number;
    onIncreaseQty?: () => void;
    onDecreaseQty?: () => void;
    onRemove?: () => void;
}