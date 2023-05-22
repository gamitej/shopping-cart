import { storeArr } from "@/data/storeData";
import StoreCard from "@/components/card/StoreCard";

const Store = () => {
  return (
    <div className="p-4">
      <h2 className="text-center text-4xl font-semibold text-slate-400">
        Store
      </h2>
      <div className="grid grid-cols-3 mt-10 gap-x-2 gap-y-2">
        {storeArr.map(({ id, name, price }) => (
          <div className="col-span-1" key={id}>
            <StoreCard
              name={name}
              price={price.label}
              value={price.value}
              id={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
