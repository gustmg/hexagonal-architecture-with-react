import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function CustomerVehiclesTable() {
  const customerVehicles = useSelector(
    (state: RootState) => state.customer.customerVehicles
  );

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Modelo</TableCell>
          <TableCell align="right">Color</TableCell>
          <TableCell align="right">Año</TableCell>
          <TableCell align="right">Precio</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customerVehicles.map((row) => (
          <TableRow
            key={row.model}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.model}
            </TableCell>
            <TableCell align="right">{row.color}</TableCell>
            <TableCell align="right">{row.year}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CustomerVehiclesTable;
