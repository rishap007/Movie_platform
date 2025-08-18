import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return(
    <>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero banner" />
            <h1>Find <span className="text-gradient">Movies</span> You'll enjoy without the hassle</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
      </div>
    </>
  )
}
export default App;