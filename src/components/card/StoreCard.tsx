import { useItemStore } from "@/state/store/useStore";
import { Button } from "@mui/material";

type storeCardProps = {
  id: string;
  name: string;
  price: string;
  value?: number;
};

const StoreCard = ({ id, name, price }: storeCardProps) => {
  const { items } = useItemStore();

  return (
    <div className="flex flex-col justify-around items-center p-2 shadow-md rounded-md gap-y-2">
      <div className="flex flex-col gap-y-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      {items.has(id) ? null : <Button variant="outlined">Add to cart</Button>}
    </div>
  );
};

export default StoreCard;
