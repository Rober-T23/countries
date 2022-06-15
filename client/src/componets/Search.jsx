import React, { useState } from "react";

function Search({onSearch}) {
    const [countri, setCountri] = useState("");
     return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(countri);
          }}>
            <input
              type="text"
              placeholder="Pais..."
              value={countri}
              onChange={e => setCountri (e.target.value)}
            />
            <input type="submit" value="Agregar" />
          </form>
     )
}

export default  Search;