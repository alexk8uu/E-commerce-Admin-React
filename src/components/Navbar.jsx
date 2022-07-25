import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import img from "../utils/2.jpg"



const Container = styled.div`
    height: 50px;
    border-bottom: 0.5px solid rgba(230,227,227);;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;
`;
const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder{
        font-size: 12px;
    }
`;

const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    position: relative;
    cursor: pointer; 
`;


const Counter = styled.div`
  width: 15px;
  height: 15px; 
  background-color: red;
  border-radius : 50px ;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <InputContainer>
            <Input placeholder='Search...' type='text'/>
            <SearchIcon/>
        </InputContainer>
        <ItemsContainer>
        <Item>
            <DarkModeOutlinedIcon/>
        </Item>
        <Item>
            <FullscreenExitOutlinedIcon/>
        </Item>
        <Item>
            <NotificationsNoneOutlinedIcon/>
            <Counter>1</Counter>
        </Item>
        <Item>
            <ChatBubbleOutlineOutlinedIcon/>
            <Counter>1</Counter>
        </Item>
        <Item>
            <ListOutlinedIcon/>
        </Item>
        <Item>
            <ProfileImg src={img}/>
        </Item>
        </ItemsContainer>
      </Wrapper>
    </Container>
  )
}

export default Navbar
