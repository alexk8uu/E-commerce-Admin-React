import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Dashboard,
  ShoppingBagOutlined,
  InventoryOutlined,
  LocalShippingOutlined,
  QueryStatsOutlined,
  NotificationsNoneOutlined,
  SettingsSystemDaydreamOutlined,
  ContentCopyOutlined,
  PeopleAltOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid rgba(230, 227, 227);
  min-height: 100vh;
  background-color: white;
`;

const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  padding-left: 10px;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #745174;
  cursor: pointer;
  margin: 5px;

  &:nth-child(1) {
    background-color: white;
  }
  &:nth-child(2) {
    background-color: #333;
  }
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: violet;
`;

const ContainerList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const List = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f4c7f4;
  }
`;
const ListText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

const ListTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Line = styled.hr`
  height: 0;
  border: 0.5px solid rgba(230, 227, 227);
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <StyledLink to="/">
          <Logo>Magdalena</Logo>
        </StyledLink>
      </Top>
      <Line />
      <Center>
        <ContainerList>
          <ListTitle>Principal</ListTitle>
          <List>
            <Dashboard color="secondary" fontSize="Small" />
            <ListText>Dashboard</ListText>
          </List>
          <ListTitle>Shoop</ListTitle>
          <StyledLink to="/users">
            <List>
              <PeopleAltOutlined color="secondary" fontSize="Small" />
              <ListText>Usuarios</ListText>
            </List>
          </StyledLink>
          <StyledLink to='/products'>
            <List>
              <ShoppingBagOutlined color="secondary" fontSize="Small" />
              <ListText>Productos</ListText>
            </List>
          </StyledLink>
          <List>
            <InventoryOutlined color="secondary" fontSize="Small" />
            <ListText>Ordenes</ListText>
          </List>
          <List>
            <LocalShippingOutlined color="secondary" fontSize="Small" />
            <ListText>Deliverys</ListText>
          </List>
          <ListTitle>Links Utiles</ListTitle>
          <List>
            <QueryStatsOutlined color="secondary" fontSize="Small" />
            <ListText>Stats</ListText>
          </List>
          <List>
            <NotificationsNoneOutlined color="secondary" fontSize="Small" />
            <ListText>Notificaciones</ListText>
          </List>
          <ListTitle>Sistema</ListTitle>
          <List>
            <SettingsSystemDaydreamOutlined
              color="secondary"
              fontSize="Small"
            />
            <ListText>System Health</ListText>
          </List>
          <List>
            <ContentCopyOutlined color="secondary" fontSize="Small" />
            <ListText>Registros</ListText>
          </List>
          <List>
            <SettingsOutlined color="secondary" fontSize="Small" />
            <ListText>Configuracion</ListText>
          </List>
          <ListTitle>Usuario</ListTitle>
          <List>
            <AccountCircleOutlined color="secondary" fontSize="Small" />
            <ListText>Perfil</ListText>
          </List>
          <List>
            <LogoutOutlined color="secondary" fontSize="Small" />
            <ListText>Salir</ListText>
          </List>
        </ContainerList>
      </Center>
      <Bottom>
        <ColorOption />
        <ColorOption />
      </Bottom>
    </Container>
  );
};

export default Sidebar;
