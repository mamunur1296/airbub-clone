import Footer from "@/components/footer/Footer";
import Nave from "@/components/header/Nave";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nave />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
