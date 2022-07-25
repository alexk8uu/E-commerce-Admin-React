import styled from 'styled-components';


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

    &.active {
        background-color: rgba(0,128,0,0.5);
        color: green;
    }

    &.pending {
        background-color: rgba(255,217,0,0.5);
        color: goldenrod;
    }
    &.passive {
        background-color: rgba(255, 0, 0, 0.5);
        color: crimson;
    }
`;



export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
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
            )
        }
    },
    { field: "email", headerName: "Email", width: 240 },
    { field: "age", headerName: "Age", width: 100 },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <StatusContainer className={`StatusContainer ${params.row.status}`}>
                    {params.row.status}
                </StatusContainer>
            )
        }
    },
];

















export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "3snow@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "4snow@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "5snow@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "6snow@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "7snow@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "8snow@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        status: "active",
        age: 65,
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