import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

useEffect(() => {
  console.log("useEffect called");
 
}, [count]);
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h2>Count: {count}</h2>
      <button onClick={() =>  setCount(count + 1)}>Increment Count</button>
      <h2>Data: {data}</h2>
      <button onClick={() =>  setData(data=>data + 1)}>Increment Data</button>
    </div>
  )
}

export default App
