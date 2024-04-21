
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-5xl font-semibold mb-5 ">Opps!!</h2>
            <h2 className="text-xl">Something went wrong.</h2>
            <a href="/"><button className="btn btn-lg bg-blue-600 text-white mt-5">Go Home</button></a>
        </div>
    );
};

export default Error;