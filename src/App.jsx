import { useState } from "react";
import Counter from "./components/Counter";
import TotalValue from "./components/TotalValue";

function App() {
  const initialCounters = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ]
  
  const [counters, setCounters] = useState(initialCounters)

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0)

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map(counter => {
      if(counter.id === counterId){
        return {
          ...counter, value: counter.value + 1,
        }
      }
      return counter;
    })
    setCounters(updatedCounters)
  }

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map(counter => {
      if(counter.id === counterId){
        return {
          ...counter, value: counter.value - 1,
        }
      }
      return counter;
    })
    setCounters(updatedCounters)
  }

  return (
    <div className="bg-black h-screen p-10 space-y-5">
      {
        counters.map(counter => <Counter key={counter.id} 
        count={counter.value}  handleIncrement={() => handleIncrement(counter.id)} handleDecrement={() => handleDecrement(counter.id)} />)
      }
      <TotalValue totalCount={totalCount} />
    </div>
  );
}

export default App;
