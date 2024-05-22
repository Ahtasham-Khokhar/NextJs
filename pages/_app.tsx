import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import "../pages/style.css"
import Navbar from "./components/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Navbar/>
  <Component {...pageProps} />
  </>

)
  ;
}
