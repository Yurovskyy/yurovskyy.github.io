import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface RowData {
  make: string;
  model: string;
  price: number;
}

export default function CGVS() {
  const [rowData] = useState<RowData[]>([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const columnDefs = [
    { headerName: "Make", valueGetter: (params: { data: { make: unknown; }; }) => params.data.make },
    { headerName: "Model", valueGetter: (params: { data: { model: unknown; }; }) => params.data.model },
    { headerName: "Price", valueGetter: (params: { data: { price: unknown; }; }) => params.data.price }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}