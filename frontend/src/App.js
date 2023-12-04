//import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  console.log(productData);
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    }
    )
    ()
     // eslint-disable-next-line
  },[])

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}


export default App;
