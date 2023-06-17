import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/router";
import { ToastContainer } from "react-toastify";




function App() {
  return (

    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}>
      
{/* Same as */}
      </RouterProvider>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>

  );
}

export default App;
