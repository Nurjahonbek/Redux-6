import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { authReady, login } from "./app/features/userSlice";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((store) => store.user);

  useEffect(() => {
    return () => unsubscribe()
  }, [dispatch]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      if(user?.photoURL || user?.displayName){
        dispatch(login(user));
      }
      dispatch((authReady(true)))
    })
  }, [])

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
