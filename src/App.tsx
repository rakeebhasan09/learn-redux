import "./App.css";

function App() {
    return (
        <>
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="flex flex-col items-center">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900">
                        Counter
                    </h1>

                    <p className="mt-2 text-sm tracking-[0.35em] text-gray-500 font-medium">
                        REDUX STATE
                    </p>

                    {/* Counter Value */}
                    <div className="mt-20 text-8xl font-light text-black">
                        0
                    </div>

                    {/* Buttons */}
                    <div className="mt-20 flex items-center gap-12">
                        {/* Decrement */}
                        <button
                            className="h-24 w-24 rounded-2xl border border-gray-200 
                       text-3xl text-gray-700 shadow-sm
                       hover:bg-gray-50 active:scale-95 transition"
                        >
                            −
                        </button>

                        {/* Reset */}
                        <button
                            className="text-3xl text-gray-400 
                       hover:text-gray-700 active:scale-90 transition"
                        >
                            ↻
                        </button>

                        {/* Increment */}
                        <button
                            className="h-24 w-24 rounded-2xl border border-gray-200 
                       text-3xl text-gray-700 shadow-sm
                       hover:bg-gray-50 active:scale-95 transition"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
