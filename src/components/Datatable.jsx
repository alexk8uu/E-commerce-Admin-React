import styled from "styled-components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { DataGrid } from "@mui/x-data-grid";
/* import { userColumns, userRows } from "../datatablesource"; */
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

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
const Datatable = ({ userRows, columns, type }) => {
  const userActionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <ContainerActions>
            <StyledLink to={`/users/${params.row.id}`}>
              <ViewButtom>View</ViewButtom>
            </StyledLink>
            <DeletedButtom>Delete</DeletedButtom>
          </ContainerActions>
        );
      },
    },
  ];

  const productActionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <ContainerActions>
            <StyledLink to={`/products/${params.row._id}`}>
              <ViewButtom>View</ViewButtom>
            </StyledLink>
            <DeletedButtom onClick={() => handleDelete(params.row._id)}>
              Delete
            </DeletedButtom>
          </ContainerActions>
        );
      },
    },
  ];

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  return (
    <Container>
      <DatatableTitle>
        Añadir Nuevo {type}
        <StyledLink to={type === 'Usuario' ? '/orders/new' : '/products/new'}>
          <Text>Añadir</Text>
          <PersonAddIcon />
        </StyledLink>
      </DatatableTitle>
      <DataGrid
        rows={userRows}
        columns={
          type === "Usuario"
            ? columns.concat(userActionColum)
            : columns.concat(productActionColum)
        }
        pageSize={9}
        getRowId={(row) => row._id || row.id}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </Container>
  );
};

export default Datatable;
