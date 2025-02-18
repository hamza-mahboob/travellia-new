import Header from "../components/header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";
import Landing from "../components/landing/Landing"

const Layout = () => {
  return (
    <>
      {/* <Landing /> */}
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;