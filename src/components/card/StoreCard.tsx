import { useItemStore } from "@/state/store/useStore";
import { Button } from "@mui/material";
import { has } from "lodash";

type storeCardProps = {
  id: string;
  name: string;
  price: string;
  value?: number;
};

const StoreCard = ({ id, name, price }: storeCardProps) => {
  const { items } = useItemStore();

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

  const handleInc = (id: string) => {
    useItemStore.setState((state) => ({
      items: {
        ...state.items,
        [id]: {
          quantity: items[id].quantity + 1,
        },
      },
    }));
  };
  const handleDec = (id: string) => {
    useItemStore.setState((state) => ({
      items: {
        ...state.items,
        [id]: {
          quantity: items[id].quantity - 1,
        },
      },
    }));
  };

  return (
    <div className="flex flex-col justify-around items-center p-2 shadow-md rounded-md gap-y-2">
      <div className="flex flex-col gap-y-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      {has(items, id) ? (
        <div className="flex gap-x-2">
          <Button variant="contained" onClick={() => handleInc(id)}>
            +
          </Button>
          <p>{items[id].quantity} in cart </p>
          <Button variant="contained" onClick={() => handleDec(id)}>
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
