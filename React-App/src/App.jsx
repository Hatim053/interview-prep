import { useEffect, useRef, useState } from "react"


function App() {
  
const [count , setCount] = useState(0);
useEffect(()=> {
  // sideEffects

  return () => {
    // cleanup
  }
} , []);

const timerRef = useRef(null);
timerRef.current = "abc";


  return (
  <>
  
  </>
      
  )
}

export default App

// useState -> 
// useEffect -> 
// useRef -> 
// useMemo ->
// useCallback ->
// useLayout ->
