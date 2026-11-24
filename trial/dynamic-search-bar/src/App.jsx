import { useEffect, useRef, useState } from "react";


function App() {
 
  const timerRef = useRef();
   const [searchQuery , setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState(null);
   useEffect(() => {
      
    if(!searchQuery) return;
     if(timerRef.current) {
      clearTimeout(timerRef.current);
     }
    timerRef.current = setTimeout(() => {
       getProducts(searchQuery);
    } , 400);

    return () => {
      clearTimeout(timerRef.current);
    }

   } , [searchQuery]);

async  function getProducts(searchQuery) {
    const apiResponse = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const jsonResponnse = await apiResponse.json();
    const products = jsonResponnse?.products;
     setSuggestions(products);
  }

  return (
    <>
      <input type="text" onInput={(e) => setSearchQuery(e.target.value.trim())} />
      {console.log(suggestions)}
      <div>
      {
        suggestions && suggestions.map((product) => <li>{product?.title}</li>)
      }
      </div>
    </>
  )
}

export default App
