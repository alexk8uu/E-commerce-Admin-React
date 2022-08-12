import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Container = styled.div``;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagen = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const Status = styled.span`
  color: ${(props) => (props.status === "Approved" ? "green" : "goldenrod")};
  background-color: ${(props) =>
    props.status === "Approved"
      ? "rgba(0,128,0,0.151)"
      : "rgba(189,189,3,0.103)"};
  padding: 5px;
  border-radius: 5px;
`;

const ListTable = (props) => {
  const orders = props.data;
  console.log("Estas son las ordenes que le llegan al taBle", orders);
  const rows = [
    {
      id: 1143155,
      product: "Blusa Stret",
      img: "https://i.ibb.co/nDjvYc5/A1917508-1.jpg",
      customer: "John Smith",
      date: "1 Margit ch",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Floreada",
      img: "https://i.ibb.co/N1ZpRH9/A3997551-1.jpgbb.co/1s8Kcwr",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://i.ibb.co/DGx4cf3/A4007515-1.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://i.ibb.co/zmkf9YJ/E0847551-1.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://i.ibb.co/FY3qssz/A5583164-1.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <Container>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Producto</TableCell>
              <TableCell className="tableCell">Cliente</TableCell>
              <TableCell className="tableCell">Fecha</TableCell>
              <TableCell className="tableCell">Hora</TableCell>
              <TableCell className="tableCell">Precio</TableCell>
              <TableCell className="tableCell">MercadoPago ID</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell className="tableCell">
                  <CellWrapper>
                    {order.products.map((p) => (
                      <div key={p._id}>
                        {p.productName} :{p.productId.slice(-7)}
                      </div>
                    ))}
                  </CellWrapper>
                </TableCell>
                <TableCell className="tableCell">{order.userId.slice(-10)}</TableCell>
                <TableCell className="tableCell">{order.createdAt.split("T")[0]}</TableCell>
                <TableCell className="tableCell">{order.createdAt.split("T")[1].slice(0,5)}</TableCell>
                <TableCell className="tableCell">$ {order.amount}</TableCell>
                <TableCell className="tableCell">{order.paymentId.slice(-10)}</TableCell>
                <TableCell className="tableCell">
                  <Status status={order.status}>{order.status}</Status>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListTable;
