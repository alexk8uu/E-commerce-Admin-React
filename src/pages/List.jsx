import { useEffect, useState } from "react";
import styled from "styled-components";
import Datatable from "../components/Datatable.jsx";
import Navbar from "../components/Navbar.jsx";
import Slidebar from "../components/Sidebar.jsx";
import { userColumns, userRows } from "../datatablesource";
import { userRequest } from "../requestMethods.js";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const ListContainer = styled.div`
  flex: 6;
`;

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/");
        setUsers(
          res.data.map((user) => ({
            id: user._id,
            username: user.username,
            img: user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif", 
            email: user.email,
            isAdmin: user.isAdmin,
            created: user.createdAt.split("T")[0],
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  console.log("USERS",users)
  console.log("USERROWS",userRows)
  return (
    <Container>
      <Slidebar />
      <ListContainer>
        <Navbar />
        <Datatable userColumns={userColumns} userRows={users} />
      </ListContainer>
    </Container>
  );
};

export default List;
