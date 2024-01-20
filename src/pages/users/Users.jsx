import { Sidebar } from "../../components/sidebar/Sidebar";
import { UsersData } from "../../components/users/UsersData";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";

export const Users = () => {
  return (
    <Sidebar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>S.No.</b>
            </TableCell>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>E-Mail</b>
            </TableCell>
            <TableCell>
              <b>Phone</b>
            </TableCell>
            <TableCell>
              <b>Last Logged In</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <UsersData
            index={1}
            name="John Doe"
            email="email@example.com"
            phone="+91 - 9876543210"
            time=""
          />
          <UsersData
            index={2}
            name="John Doe"
            email="email@example.com"
            phone="+91 - 9876543210"
            time=""
          />
        </TableBody>
      </Table>
    </Sidebar>
  );
};
