import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const Container = styled.div`
    
`;


const CellWrapper = styled.div`
    display: flex;
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
    color : ${props => props.status === 'Approved' ? "green" : "goldenrod"};
    background-color : ${props => props.status === 'Approved' ? "rgba(0,128,0,0.151)" : "rgba(189,189,3,0.103)"};
    padding: 5px;
    border-radius: 5px;
`


const ListTable = () => {

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
            <TableContainer component={Paper} className='table'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>Tracking ID</TableCell>
                            <TableCell className='tableCell'>Producto</TableCell>
                            <TableCell className='tableCell'>Cliente</TableCell>
                            <TableCell className='tableCell'>Fecha</TableCell>
                            <TableCell className='tableCell'>Precio</TableCell>
                            <TableCell className='tableCell'>Metodo de Pago</TableCell>
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell className='tableCell'>
                                    <CellWrapper>
                                        <Imagen src={row.img} />
                                        {row.product}
                                    </CellWrapper>
                                </TableCell>
                                <TableCell className="tableCell">{row.customer}</TableCell>
                                <TableCell className='tableCell'>{row.date}</TableCell>
                                <TableCell className='tableCell'>{row.amount}</TableCell>
                                <TableCell className='tableCell'>{row.method}</TableCell>
                                <TableCell className='tableCell'>
                                    <Status status={row.status}>{row.status}</Status>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListTable
