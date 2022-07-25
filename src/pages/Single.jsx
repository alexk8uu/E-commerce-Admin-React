import styled from 'styled-components';
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import Chart from '../components/Chart.jsx'
import List from '../components/Table.jsx'


const Container = styled.div`
  display: flex;
  width: 100%;
`;

const SingleContainer = styled.div`
  flex: 6;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;
const Left = styled.div`
  flex: 1;
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
  padding: 20px;
  position: relative;
`;
const Right = styled.div`
  flex:2;
`;
const Bottom = styled.div`
  padding: 20px;
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
  margin: 10px 20px;
`;
const Title = styled.h1`
  font-size: 16px;
  color: lightgray;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const EditButtom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  color: violet;
  background-color: #b36db36a;
  cursor: pointer;
  border-radius: 0px 0px 0px 5px;


`;

const Details = styled.div``;

const ItemTitle = styled.h1`
margin-bottom: 10px;
color: #555;
font-size: 24px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

const ItemKey = styled.span`
font-weight: bold;
color: gray;
margin-right: 5px;
`;
const ItemValue = styled.span`
font-weight: 300;
`;

const Single = () => {
  return (
    <Container>
      <Sidebar />
      <SingleContainer>
        <Navbar />
        <Top>
          <Left>
            <EditButtom>Edit</EditButtom>
            <Title>Information</Title>
            <Item>
              <Imagen src={'https://i.ibb.co/DGx4cf3/A4007515-1.jpg'} alt="avatar" />
              <Details>
                <ItemTitle>Jan Doe</ItemTitle>
                <DetailItem>
                  <ItemKey>Email: </ItemKey>
                  <ItemValue>jandoe@gmail.com</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Telefono: </ItemKey>
                  <ItemValue>+1 2345 67 89</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Direccion: </ItemKey>
                  <ItemValue>Diario la nacion 3359 - Salta</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Ciudad: </ItemKey>
                  <ItemValue>Argentina</ItemValue>
                </DetailItem>
              </Details>
            </Item>
          </Left>
          <Right>
            <Chart aspect={3 / 1} title={"Gastos del usuario ( Ultimo 6 meses )"} />
          </Right>
        </Top>
        <Bottom>
          <Title>Ultimas Transacciones</Title>
          <List />
        </Bottom>
      </SingleContainer>
    </Container>
  )
}

export default Single
