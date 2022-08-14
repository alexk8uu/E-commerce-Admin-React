import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const TableCellTitle = styled(TableCell)`
  background-color: violet;
  h4{
    text-align: center; 
    font-size: 14px;
    color: white;
    font-weight: 500;
  }
`;

const TableCellInfo = styled(TableCell)`
  background-color: #f3daf3;
`;

const Container = styled.div`

`;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/* 
const Imagen = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`; */

const Status = styled.span`
  color: ${(props) => (props.status === "Approved" ? "green" : "white")};
  font-weight: 400;
  background-color: ${(props) =>
    props.status === "Approved"
      ? "rgba(0,128,0,0.151)"
      : "#cab32cce"};
  padding: 5px;
  border-radius: 5px;
`;

const ListTable = (props) => {
  const orders = props.data;
/*   console.log("Estas son las ordenes que le llegan al taBle", orders); */
  return (
    <Container>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCellTitle className="tableCell"><h4>Traking ID</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Producto</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Cliente</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Fecha</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Hora</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Precio</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>MercadoPago ID</h4></TableCellTitle>
              <TableCellTitle className="tableCell"><h4>Status</h4></TableCellTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCellInfo>{order._id}</TableCellInfo>
                <TableCellInfo className="tableCell">
                  <CellWrapper>
                    {order.products.map((p) => (
                      <div key={p._id}>
                        {p.productName} :{p.productId.slice(-7)}
                      </div>
                    ))}
                  </CellWrapper>
                </TableCellInfo>
                <TableCellInfo className="tableCell">{order.userId.slice(-10)}</TableCellInfo>
                <TableCellInfo className="tableCell">{order.createdAt.split("T")[0]}</TableCellInfo>
                <TableCellInfo className="tableCell">{order.createdAt.split("T")[1].slice(0,5)}</TableCellInfo>
                <TableCellInfo className="tableCell">$ {order.amount}</TableCellInfo>
                <TableCellInfo className="tableCell">{order.paymentId.slice(-10)}</TableCellInfo>
                <TableCellInfo className="tableCell">
                  <Status status={order.status}>{order.status}</Status>
                </TableCellInfo>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListTable;
