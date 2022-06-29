
import './App.css';
import Header from "./component/header";
import Hero from "./pages/hero";
import About from "./pages/about";
import Service from "./pages/service";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
     <Header />
        <Hero />
        <About />
        <Service />
        <Footer />
    </div>
  );
}

export default App;
