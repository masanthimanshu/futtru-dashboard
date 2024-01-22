import { useEffect, useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { UsersData } from "../../components/users/UsersData";
import { getCollectionData } from "../../firebase/cloudFirestore/getData";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCollectionData("users").then((e) => setUsers(e));
  }, []);

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
          {users.map((e, index) => {
            return (
              <UsersData
                time=""
                key={index}
                name={e.name}
                email={e.email}
                phone={e.phone}
                index={index + 1}
              />
            );
          })}
        </TableBody>
      </Table>
    </Sidebar>
  );
};
