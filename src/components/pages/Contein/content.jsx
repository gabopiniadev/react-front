import Table from 'react-bootstrap/Table';

function Listoperator() {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      );
    }

export default Listoperator;
