import styled from 'styled-components';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatablesource';


const Container = styled.div`
    height: 550px;
    padding: 20px;
`;


const ContainerActions = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;


const ViewButtom = styled.div`
    padding: 2px 5px;
    border-radius: 5px;
    color: darkblue;
    border: 1px dotted rgba(0,0,139,0.5);
    cursor: pointer;
`;
const DeletedButtom = styled.div`
  padding: 2px 5px;
    border-radius: 5px;
    color: crimson;
    border: 1px dotted rgba(220,20,60,0.6);
    cursor: pointer;
`;

const actionColum = [
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
            return (
                <ContainerActions>
                    <ViewButtom>View</ViewButtom>
                    <DeletedButtom>Delete</DeletedButtom>
                </ContainerActions>
            )
        }
    }
]


const Datatable = () => {
    return (
        <Container>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColum)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </Container>
    )
}

export default Datatable
