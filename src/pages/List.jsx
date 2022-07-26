import styled from "styled-components";
import Datatable from "../components/Datatable.jsx";
import Navbar from "../components/Navbar.jsx";
import Slidebar from "../components/Sidebar.jsx";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const ListContainer = styled.div`
  flex: 6;
`;

const List = ( { columns, type, data } ) => {

  return (
    <Container>
      <Slidebar />
      <ListContainer>
        <Navbar />
        <Datatable columns={columns} userRows={data} type={type} />
      </ListContainer>
    </Container>
  );
};

export default List;
