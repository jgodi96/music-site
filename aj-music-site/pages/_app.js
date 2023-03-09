
import "@/styles/globals.css";
import Nav from "@/components/template/Nav";
export default function App({ Component, pageProps }) {
  
  return (
  <>
  <Nav/>
  <Component {...pageProps} />
  </>
  )
 
}
