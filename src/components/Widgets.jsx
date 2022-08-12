
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: space-between;
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
  border-radius: 10px;
  height: 100px;
`;

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const UserTitle = styled.span`
font-weight: bold;
font-size: 14px;
color: rgb(160,160,160);
`;
const Counter = styled.span`
font-size: 28px;
font-weight: 300;
`;
const UserLink = styled.span`
width: max-content;
font-size: 12px;
border-bottom: 1px solid gray;
cursor: pointer;
`;

const Porcentage = styled.div`
display: flex;
align-items: center;
font-size: 14px;
color: green;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-self: flex-end;
 
  
`;

const Widgets = ({ type , orders}) => {

  let data;

  //momentaneo

  const amount = 100;
  const diff = 20;

  if (type === 'user') {
    data = {
      title: "USUARIOS",
      isMoney: false,
      link: "Ver todos los usuarios",
      icon: <PersonOutlineIcon style={{
        color: "crimson",
        padding: '5px',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: '5px',
        fontSize: '18px',
      }} />,
    };
  } else if (type === "orders") {
    data = {
      orders,
      title: "ORDENES",
      isMoney: false,
      link: "Ver todas las ordenes",
      icon: <AccountBalanceWalletOutlinedIcon  style={{
        color: "goldenrod",
        padding: '5px',
        backgroundColor: 'rgba(218,165,32,0.2)',
        borderRadius: '5px',
        fontSize: '18px',
      }} />,
    };
  } else if (type === 'earning') {
    data = {
      title: "GANANCIAS",
      isMoney: true,
      link: "Ver ganancias netas",
      icon: <RequestQuoteOutlinedIcon style={{
        color: "green",
        padding: '5px',
        backgroundColor: 'rgba(0,168,0,0.2)',
        borderRadius: '5px',
        fontSize: '18px',
      }} />,
    };
  } else {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "Ver detalles",
      icon: <BalanceOutlinedIcon style={{
        color: "purple",
        padding: '5px',
        backgroundColor: 'rgba(128,0,128,0.2)',
        borderRadius: '5px',
        fontSize: '18px',
      }} />,
    };
  }



  return (
    <Container>
      <Left>
        <UserTitle>{data.title}</UserTitle>
        <Counter>{data.isMoney && "$"} {data.orders ? data.orders : amount }</Counter>
        <UserLink>{data.link}</UserLink>
      </Left>
      <Right>
        <Porcentage>
          <KeyboardArrowUpIcon />
          {diff} %
        </Porcentage>
        <ContainerIcon>
          {data.icon}
        </ContainerIcon>
      </Right>
    </Container>
  )
}

export default Widgets
