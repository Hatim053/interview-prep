import React, { useEffect, useState , useRef } from "react";
//https://dummyjson.com/products/search?q=phone
const App = () => {
  const [query, setQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const timerRef = useRef(null);
  async function getData() {
    if (query.trim().length == 0) return;
    console.log("search Api called for query   " , query)
    let data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    let jsonData = await data.json();
    setSearchSuggestion(jsonData.products);
  }

  useEffect(() => {
    if(timerRef) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      getData();
    } , 500)
  }, [query]);
  return (
    <div style={styles.root}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search products..."
        style={styles.input}
      />

      <div style={styles.suggestionContainer}>
        {query.trim().length !== 0 &&
          searchSuggestion.map((pObj) => {
            return (
              <div style={styles.suggestion}>
                <p style={styles.title}>{pObj.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};



// Add hover using JS because inline CSS cannot do :hover
styles.suggestion[":hover"] = {};

export default App;