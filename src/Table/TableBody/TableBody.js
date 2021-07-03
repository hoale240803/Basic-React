import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function TableBody() {
  return (
    <div>
      <table class="table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;
