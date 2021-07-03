import React from "react";

import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";
import TableBody from "./TableBody/TableBody";
import TableFilters from "./TableFilters/TableFilters";

function Table() {
  return (
    <div className="d-flex flex-column container">
      <div className="d-flex flex-row align-items-center">
        <TableFilters />
        <SearchBar />
      </div>
      <div className="d-flex flex-row">
        <TableBody />
      </div>
      <div className="d-flex flex-row">
        <Pagination />
      </div>
    </div>
  );
}

export default Table;
