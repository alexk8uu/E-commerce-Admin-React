import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Widgets from "../components/Widgets";
import { userRequest } from "../requestMethods.js";

const Container = styled.div`
  display: flex;
`;

const HomeContainer = styled.div`
  flex: 6;
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
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  padding: 20px;
  margin: 20px;
`;

const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;

const Home = () => {
  const MONTHS = useMemo(
    () => [
      "ENERO",
      "FEBRERO",
      "MARZO",
      "ABRIL",
      "MAYO",
      "JUNIO",
      "JULIO",
      "AGOSTO",
      "SEPTIEMBRE",
      "OCTUBRE",
      "NOVIEMBRE",
      "DICIEMBRE",
    ],
    []
  );
  const [porc ,setPorc ] = useState(0);
  const [userStats, setUserStats ] = useState([])
  const [orders, setOrders] = useState([]);
  const [incomeOrdes, setIncomeOrders ] = useState([])
  const [ordersTotal, setOrdersTotal] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
        setOrdersTotal(res.data.length)
      } catch (error) {
        console.log(error);
      }
    };
    const getIncomeOrders = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncomeOrders(res.data);
        setPorc((res.data[1].total * 100 / 50000  ))
      } catch (error) {
        console.log(error)
      }
    };
    getOrders();
    getIncomeOrders();
  }, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest("users/stats");
        res.data.map((item) => {
          return setUserStats((prev) => [
            ...prev,
            {name: MONTHS[item._id -1 ], "Total": item.total}
          ])
        })
      } catch (error) {
        console.log(error)
      }
    };
    getStats();
  },[MONTHS])

  
  console.log("Estas son las users que llegan", userStats);
  console.log("Estas son las ordenes que llegan", orders);

  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <Navbar />
        <WidgetsContainer>
          <Widgets type="user" />
          <Widgets type="orders" orders={ordersTotal}  />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </WidgetsContainer>
        <ChartsContainer>
          <Featured data={incomeOrdes} porc={porc}/>
          <Chart aspect={2 / 1} title={"Ultimos 6 Meses (Ingresos)"} data={userStats}/>
        </ChartsContainer>
        <ListContainer>
          <ListTitle>Ultimas Transacciones</ListTitle>
          <Table data={orders} />
        </ListContainer>
      </HomeContainer>
    </Container>
  );
};

export default Home;
