import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from 'react';

function Listoperator() {
  const url = 'http://localhost:8080/v1/lista-proveedores/1/17/'
  const [proveedores, setProveedores] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setProveedores(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Rif</th>
              <th>Direccion</th>
              <th>Razon Social</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {!proveedores ? 'Cargando...' : 
         proveedores.map( ( proveedor, index) => {
            return <tr>
              <td>#</td>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.rif}</td>
              <td>{proveedor.direccion}</td>
              <td>{proveedor.razonSocial}</td>
              <td></td>
            </tr>
            })}
          </tbody>
        </Table>
      );
    }

export default Listoperator;
