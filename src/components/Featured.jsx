import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';



const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 1px 1px 11px 2px rgba(0,0,0,0.56); 
    box-shadow: 1px 1px 11px 2px rgba(0,0,0,0.56);
    padding: 20px;

`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: gray;
`;
const Bottom = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
`;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
`;

const FeaturedChart = styled.div`
    width: 100px;
    height: 100px;
`;
const SubTitle = styled.p`
    font-weight: 700;
    color: gray;
`;
const Amount = styled.p`
    font-size: 30px;
`;
const Desc = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: gray;
    text-align: center;
`;

const Summary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const SummaryItem = styled.div`
    text-align: center;
`;
const ItemTitle = styled.div`
    font-size: 14px;
    color: gray;
`;
const ItemResult = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
font-size: 14px;
color: ${props => props.amount ? "green" : "red" };
`;
const ResultAmount = styled.div``;



const Featured = () => {
    
    
    let amount = true;
   
   
   
    return (


        <Container>
            <Top>
                <Title>Ingresos Totales</Title>
                <MoreVertIcon fontSize='Small' />
            </Top>
            <Bottom>
                <FeaturedChart>
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
                </FeaturedChart>
                <SubTitle>Ventas totales de hoy</SubTitle>
                <Amount>$420</Amount>
                <Desc>Procesamiento de transacciones anteriores. Es posible que no se incluyan los últimos pagos.</Desc>
                <Summary>
                    <SummaryItem>
                        <ItemTitle>Target</ItemTitle>
                        <ItemResult amount={amount}>
                            <KeyboardArrowUpRoundedIcon fontSize='Small'/>
                            <ResultAmount>$12.5k</ResultAmount>
                        </ItemResult>
                    </SummaryItem>
                    <SummaryItem>
                        <ItemTitle>Semana pasada</ItemTitle>
                        <ItemResult >
                            <KeyboardArrowDownRoundedIcon fontSize='Small'/>
                            <ResultAmount>$12.5k</ResultAmount>
                        </ItemResult>
                    </SummaryItem>
                    <SummaryItem>
                        <ItemTitle>Mes Anterior</ItemTitle>
                        <ItemResult amount={amount}> 
                            <KeyboardArrowUpRoundedIcon fontSize='Small'/>
                            <ResultAmount>$12.5k</ResultAmount>
                        </ItemResult>
                    </SummaryItem>
                </Summary>
            </Bottom>
        </Container>
    )
}

export default Featured
