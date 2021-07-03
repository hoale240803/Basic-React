import React from "react";

function PageSize() {
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
        5
      </button>
      <div class="dropdown-menu" aria-labelledby="triggerId">
        <button class="dropdown-item " href="#">
          10
        </button>
        <button class="dropdown-item " href="#">
          20
        </button>
        <button class="dropdown-item" href="#">
          50
        </button>
      </div>
    </div>
  );
}

export default PageSize;
