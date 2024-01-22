import { TableRow, TableCell } from "@mui/material";

export const UsersData = ({ index, name, email, phone, time }) => {
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{time}</TableCell>
    </TableRow>
  );
};
