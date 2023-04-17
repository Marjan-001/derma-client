import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { router } from "./Routes/router";



function App() {
  return (

    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>

  );
}

export default App;
