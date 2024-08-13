import Counter from "./components/Counter";
import TotalValue from "./components/TotalValue";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";

function App() {
  // const initialCounters = [
  //   {
  //     id: 1,
  //     value: 0,
  //   },
  //   {
  //     id: 2,
  //     value: 0,
  //   },
  // ]

  // const [counters, setCounters] = useState(initialCounters)

  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  };

  return (
    <div className="bg-black h-screen p-10 space-y-5">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          handleIncrement={() => handleIncrement(counter.id)}
          handleDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <TotalValue totalCount={totalCount} />
    </div>
  );
}

export default App;
