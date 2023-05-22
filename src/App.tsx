import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Navbar />
        <Router />
      </div>
    </Suspense>
  );
}

const Loading = () => {
  return (
    <div
      className="h-full w-full flex justify-center
   items-center"
    >
      Loading...
    </div>
  );
};

export default App;
