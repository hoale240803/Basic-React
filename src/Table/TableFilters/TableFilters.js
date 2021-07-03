import React from "react";

function TableFilters() {
  return (
    <div class="dropdown open mr-4">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="triggerId"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filters
      </button>
      <div class="dropdown-menu" aria-labelledby="triggerId">
        <button class="dropdown-item" href="#">
          Name
        </button>
        <button class="dropdown-item " href="#">
          Age
        </button>
        <button class="dropdown-item " href="#">
          Newest
        </button>
        <button class="dropdown-item " href="#">
          Follower
        </button>
      </div>
    </div>
  );
}

export default TableFilters;
