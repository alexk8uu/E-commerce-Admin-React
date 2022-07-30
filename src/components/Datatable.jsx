import styled from "styled-components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { DataGrid } from "@mui/x-data-grid";
/* import { userColumns, userRows } from "../datatablesource"; */
import { Link } from "react-router-dom";

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
  border: 1px dotted rgba(0, 0, 139, 0.5);
  cursor: pointer;
`;
const DeletedButtom = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  border: 1px dotted rgba(220, 20, 60, 0.6);
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: green;
  font-size: 14px;
  border: 1px solid;
  font-weight: 500;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const actionColum = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <ContainerActions>
          <StyledLink to="/users/test">
            <ViewButtom>View</ViewButtom>
          </StyledLink>
          <DeletedButtom>Delete</DeletedButtom>
        </ContainerActions>
      );
    },
  },
];

const DatatableTitle = styled.div`
  width: 100%;
  font-size: 24px;
  color: gray;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.h1`
  font-size: 12px;
  margin-right: 5px;
`;
const Datatable = ({ userRows, userColumns }) => {

  return (
    <Container>
      <DatatableTitle>
        Añadir Nuevo Usuario
        <StyledLink to="/users/new">
          <Text>Añadir</Text>
          <PersonAddIcon />
        </StyledLink>
      </DatatableTitle>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </Container>
  );
};

export default Datatable;
