import styled from 'styled-components';
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react';




const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NewContainer = styled.div`
 flex: 6;
`;

const Top = styled.div`
    -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
    box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
    padding: 20px;
    margin: 20px;
`;
const Bottom = styled.div`
   -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
    box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
    padding: 20px;
    margin: 20px;
    display: flex;
    `;

const Text = styled.h1`
  color: lightgray;
  font-size: 20px;
`;
const Left = styled.div`
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 2;
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;

`;
const ContainerInput = styled.div`
  width: 40%;

  .icon{
    cursor: pointer;
  }
`;
const FormText = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

`;
const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
`;
const Buttom = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  background-color: violet;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

const New = ({ inputs, text }) => {


  const [file, setFile] = useState("")

  console.log(file)

  return (
    <Container>
      <Sidebar />
      <NewContainer>
        <Navbar />
        <Top>
          <Text>{text}</Text>
        </Top>
        <Bottom>
          <Left>
            <Imagen src={
              file? URL.createObjectURL(file) : 
              "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="source" />
          </Left>
          <Right>
            <Form>
              <ContainerInput>
                <FormText htmlFor='file'>
                  Imagen: <DriveFolderUploadOutlinedIcon className='icon' />
                </FormText>
                <FormInput type='file' id='file' onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
              </ContainerInput>
              {
                inputs.map((input) => (
                  <ContainerInput key={input.id}>
                    <FormText>{input.label}</FormText>
                    <FormInput type={input.type} placeholder={input.placeholder} />
                  </ContainerInput>
                ))
              }
              <Buttom>Enviar</Buttom>
            </Form>
          </Right>
        </Bottom>
      </NewContainer>
    </Container>
  )
}

export default New
