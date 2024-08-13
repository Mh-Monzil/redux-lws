
import Count from "./Count";



const Counter = ({count, handleIncrement, handleDecrement}) => {
    // const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount((prevCount) => prevCount + 1)
    // }

    // const handleDecrement = () => {
    //     setCount((prevCount) => prevCount - 1)
    // }

    return (
        <div className="min-h-40 w-[400px] mx-auto bg-[#000] rounded-xl p-6 text-white border-2 shadow-white shadow-sm">
            <Count count={count} />
            <div className="mx-auto mt-9 flex gap-6">
                <button onClick={handleDecrement} className="bg-red-600 font-semibold text-2xl px-3 py-1 pb-2 rounded-md">Decrement -</button>
                <button onClick={handleIncrement} className="bg-green-600 font-semibold text-2xl px-3 py-1 pb-2 rounded-md">Increment +</button>
            </div>
        </div>
    );
};

export default Counter;