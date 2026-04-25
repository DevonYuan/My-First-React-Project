import Playground from "./Playground.jsx";

export default function App() {
    return (
        <div className = "app-wrapper">
            <div className="app">
                <h1 className="header-box">Particle Playground</h1>
                <h2>Description</h2>
                <p>
                    Before I reach my final goal of creating nicer react projects, I need to make sure I have strong fundamentals.<br />
                    Here, I'll create a box that allows the user to move a particle around inside a box.<br />
                    This is my first time using Vite, after cleaning up the boilerplate code.<br />
                    Click anywhere within the blue region to move the point around with the WASD keys!
                </p>
                <Playground />
            </div>
        </div>
    );
}