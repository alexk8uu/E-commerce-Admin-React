import styled from "styled-components";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
import { addProduct } from "../redux/apiCalls.js";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NewContainer = styled.div`
  flex: 6;
`;

const Top = styled.div`
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  padding: 20px;
  margin: 20px;
`;
const Bottom = styled.div`
  -webkit-box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.52);
  padding: 20px;
  margin: 20px;
  display: flex;
`;

const Text = styled.h1`
  color: violet;
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

  .icon {
    cursor: pointer;
  }
`;
const FormText = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 12px;
    color: crimson;
  }
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

const Select = styled.select``;
const Option = styled.option``;

const New = ({ inputs, text }) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    /*   watch, */
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ESTA ES LA DATA", data);
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const { category, color, desc, inStock, price, sizes, title } = data;
          const product = {
            title,
            desc,
            img: downloadURL,
            categories: category.split(','),
            size: sizes.split(','),
            color: color.split(','),
            price,
            inStock,
          };
          addProduct(dispatch, product)
        });
      }
    );
  };

  const [file, setFile] = useState("");

  /* console.log("esto es files", file); */

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
            <Imagen
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="source"
            />
          </Left>
          <Right>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <ContainerInput>
                <FormText htmlFor="file">
                  Imagen:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                  {errors.file?.type === "required" && (
                    <span>Imagen requerida</span>
                  )}
                </FormText>
                <FormInput
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  {...register("file", {
                    required: true,
                    onChange: (e) => {
                      setFile(e.target.files[0]);
                    },
                  })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Titulo:
                  {errors.title?.type === "required" && (
                    <span>Titulo requerido</span>
                  )}
                </FormText>

                <FormInput
                  type="text"
                  placeholder="Add title.."
                  {...register("title", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Descripcion:
                  {errors.title?.type === "required" && (
                    <span>Descripcion requerida</span>
                  )}
                </FormText>
                <FormInput
                  type="text"
                  placeholder="Add desc.."
                  {...register("desc", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Categorias:
                  {errors.category?.type === "required" && (
                    <span>Categorias requeridas</span>
                  )}
                </FormText>
                <FormInput
                  type="text"
                  placeholder="Add category.."
                  {...register("category", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Talles:
                  {errors.sizes?.type === "required" && (
                    <span>Talles requeridas</span>
                  )}
                </FormText>
                <FormInput
                  type="text"
                  placeholder="Add sizes.."
                  {...register("sizes", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Colores:
                  {errors.color?.type === "required" && (
                    <span>Colores requeridos</span>
                  )}
                </FormText>
                <FormInput
                  type="text"
                  placeholder="Add color.."
                  {...register("color", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  Precio:
                  {errors.price?.type === "required" && (
                    <span>Precio requerido</span>
                  )}
                </FormText>
                <FormInput
                  type="number"
                  placeholder="Add price.."
                  {...register("price", { required: true })}
                />
              </ContainerInput>
              <ContainerInput>
                <FormText>
                  En Stock:
                  {errors.inStock?.type === "required" && (
                    <span>Precio requerido</span>
                  )}
                </FormText>
                <Select
                  name="inStock"
                  {...register("inStock", { required: true })}
                >
                  <Option value="true">Si</Option>
                  <Option value="false">No</Option>
                </Select>
              </ContainerInput>
              <Buttom type="submit">Enviar</Buttom>
            </Form>
          </Right>
        </Bottom>
      </NewContainer>
    </Container>
  );
};

export default New;
