import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

const Account = () => {
  const [membersID, setMembersID] = useState(0);
  const [membersAdress, setMembersAdress] = useState("0xDBF84248124cD22aC17E0Ea42be2C895C15D9a2b");
  return (
    <div>
      <Container className="mt-5 mx-9">
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>GropMembers</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{membersID} </td>
              <td>{ membersAddress}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Account;
