import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
