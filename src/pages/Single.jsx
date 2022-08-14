import styled from "styled-components";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Chart from "../components/Chart.jsx";
import List from "../components/Table.jsx";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods.js";

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
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  padding: 20px;
  position: relative;
`;
const Right = styled.div`
  flex: 2;
`;
const Bottom = styled.div`
  padding: 20px;
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  margin: 10px 20px;
`;
const Title = styled.h1`
  font-size: 16px;
  color: gray;
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
  margin-right: 10px;
`;

const Single = ({ type }) => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([])  


  const product = useSelector((state) =>
    state.products.products.find((prod) => prod._id === productId)
  );


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
  
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(`orders/income?p_id=${productId}`);
        const list = res.data.sort((a,b) => {
          return a._id - b._id;
        })
        list.map((item) => setProductStats((prev) => [
          ...prev,
          { name: MONTHS[item._id -1 ], Sales: item.total}
        ]))
      } catch (error) {
        console.log(error)
      }
    };
    getStats();
  },[productId, MONTHS])

  console.log(productStats);
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
              <Imagen src={product.img} alt="avatar" />
              <Details>
                <ItemTitle>{product.title}</ItemTitle>
                <DetailItem>
                  <ItemKey>Id: </ItemKey>
                  <ItemValue>{product._id}</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Descripcion: </ItemKey>
                  <ItemValue>{product.desc}</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Colores: </ItemKey>
                  {product?.color.map((p) => (
                    <ItemValue key={p}>{p}</ItemValue>
                  ))}
                </DetailItem>
                <DetailItem>
                  <ItemKey>Tamaños: </ItemKey>
                  {product?.size.map((p) => (
                    <ItemValue key={p}>{p}</ItemValue>
                  ))}
                </DetailItem>
                <DetailItem>
                  <ItemKey>Categorias: </ItemKey>
                  {product?.categories.map((p) => (
                    <ItemValue key={p}>{p}</ItemValue>
                  ))}
                </DetailItem>
                <DetailItem>
                  <ItemKey>Price: </ItemKey>
                  <ItemValue>$ {product.price}</ItemValue>
                </DetailItem>
              </Details>
            </Item>
          </Left>
          <Right>
            <Chart
              aspect={3 / 1}
              title={"Gastos del usuario ( Ultimo 6 meses )"}
              dataKey='Sales'
              data={productStats}
            />
          </Right>
        </Top>
        <Bottom>
          <Title>Ultimas Transacciones</Title>
          {/* <List /> */}
        </Bottom>
      </SingleContainer>
    </Container>
  );
};

export default Single;
