import "./App.css";
import MyCarousel from "./Components/Carousel/Carousel";
import MyContainer from "./Components/MainContainer/Container";
import MyNavbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            {/* Navigation bar */}
            <MyNavbar></MyNavbar>

            {/* Carousel */}
            <MyCarousel></MyCarousel>

            {/* Main content including team and players */}
            <MyContainer></MyContainer>
        </div>
    );
}

export default App;
