import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className="h-[90vh] w-full flex justify-center
   items-center"
    >
      Loading...
    </div>
  );
};

export default App;
