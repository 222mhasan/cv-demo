import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/cwbc0dd/pexels-pixabay-255464.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <p className="text-2xl">HI, I'M MD MEHEDI HASAN</p>
                        <h1 className="mb-5 text-6xl font-bold">Front End Developer</h1>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary">Projects</button>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;