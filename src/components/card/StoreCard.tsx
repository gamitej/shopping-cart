import { useItemStore } from "@/state/store/useStore";
import { Button } from "@mui/material";

type storeCardProps = {
  id: string;
  name: string;
  price: string;
  value?: number;
};

const StoreCard = ({ id, name, price }: storeCardProps) => {
  const { items, setItems } = useItemStore();

  const handleItems = (id: string, value: number) => {
    useItemStore.setState((state) => ({
      items: {
        ...state.items,
        [id]: {
          quantity: value,
        },
      },
    }));
  };

  const handleIncDec = (id: string, val: number) => {
    let update = items[id].quantity + val;
    if (update < 0) {
      update = 0;
    }
    setItems(id, update);
  };

  return (
    <div className="flex flex-col justify-around items-center p-2 shadow-md rounded-md gap-y-2">
      <div className="flex flex-col gap-y-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      {items[id] && items[id].quantity !== 0 ? (
        <div className="flex gap-x-2">
          <Button variant="contained" onClick={() => handleIncDec(id, 1)}>
            +
          </Button>
          <p>{items[id].quantity} in cart </p>
          <Button variant="contained" onClick={() => handleIncDec(id, -1)}>
            -
          </Button>
        </div>
      ) : (
        <Button variant="outlined" onClick={() => handleItems(id, 1)}>
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default StoreCard;
