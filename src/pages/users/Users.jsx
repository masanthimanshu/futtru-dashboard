import { useEffect, useState } from "react";
import { UsersData } from "../../components/users/UsersData";
import { getCollectionData } from "../../firebase/cloudFirestore/getData";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCollectionData("users").then((e) => setUsers(e));
  }, []);

  return (
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
        {users.map((e, index) => {
          return (
            <UsersData
              key={e.id}
              name={e.name}
              email={e.email}
              phone={e.phone}
              index={index + 1}
              time={e.timestamp.toDate().toDateString()}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
