import React from "react";
import OnePage from "./OnePage/OnePage";
import PageSize from "./PageSize/PageSize";

function Pagination() {
  return (
    <div className="d-flex flex-row">
      <PageSize />
      <OnePage />
    </div>
  );
}

export default Pagination;
