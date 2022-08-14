import styled from "styled-components";


const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const StatusContainer = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isAdmin ? "rgba(0,128,0,0.5)" : "rgba(255,0,0,0.5)"};
  color: ${(props) => (props.isAdmin ? "green" : "crimson")};
`;


export const productColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      return (
        <ImgContainer>
          <Img src={params.row.img} alt="avatar" />
          {params.row.title}
        </ImgContainer>
      );
    },
  },
  { field: "inStock", headerName: "InStock", width: 250 },
  { field: "price", headerName: "Price", with: 250 },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <ImgContainer>
          <Img src={params.row.img} alt="avatar" />
          {params.row.username}
        </ImgContainer>
      );
    },
  },
  { field: "email", headerName: "Email", width: 240 },
  { field: "created", headerName: "Created", width: 200 },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 160,
    renderCell: (params) => {
      console.log(params);
      return (
        <StatusContainer isAdmin={params.row.isAdmin}>
          {`${params.row.isAdmin}`}
        </StatusContainer>
      );
    },
  },
];

export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];
