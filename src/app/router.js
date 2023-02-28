import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CuteCatContainer from ".././components/CuteCatContainer"
import Header from ".././components/Header"


const router = createBrowserRouter([
  {
    path: "/",
    element: <CuteCatContainer/>,
    
  },
  {
    path: "/ratedCats",
    element: <Header/>,
    
  },
]);
export default router;