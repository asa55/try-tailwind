import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid grid-cols-98 h-screen">
        <div class="col-span-9 bg-red-400 border-2 flex items-center justify-center">01</div>
        <div class="row-span-12 bg-yellow-400 border-2 flex items-center justify-center">02</div>
        <div class="row-span-12 col-span-2 bg-green-400 border-2 flex items-center justify-center">03</div>
        <div class="row-span-12 col-span-6 bg-blue-400 border-2 flex items-center justify-center">04</div>
        <div class="col-span-9 bg-purple-400 border-2 flex items-center justify-center">05</div>
      </div>
    </>
  )
}

export default App
