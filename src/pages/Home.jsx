import styled from 'styled-components';
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import Widgets from '../components/Widgets';

const Container = styled.div`
    display: flex;
`;

const HomeContainer = styled.div`
    flex: 6 ;
`;

const WidgetsContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 25px;
`;

const ChartsContainer = styled.div`
    display: flex;
    padding: 5px 20px;
    gap: 20px;
`;

const ListContainer = styled.div`
    -webkit-box-shadow: 1px 1px 11px 2px rgba(0,0,0,0.56); 
    box-shadow: 1px 1px 11px 2px rgba(0,0,0,0.56);
    padding: 20px;
    margin: 20px;
`;

const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;



const Home = () => {
  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <Navbar />
        <WidgetsContainer>
          <Widgets type="user" />
          <Widgets type="orders" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </WidgetsContainer>
        <ChartsContainer>
          <Featured />
          <Chart />
        </ChartsContainer>
        <ListContainer>
          <ListTitle>Ultimas Transacciones</ListTitle>
          <Table/>
        </ListContainer>
      </HomeContainer>
    </Container>
  )
}

export default Home
