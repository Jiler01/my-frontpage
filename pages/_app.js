import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-bl from-primary to-secondary">
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
