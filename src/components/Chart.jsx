import styled from 'styled-components';
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
   { name: "Enero", Total: 1200 },
   { name: "Febrero", Total: 2400 },
   { name: "Marzo", Total: 1800 },
   { name: "Abril", Total: 900 },
   { name: "Mayo", Total: 1500 },
   { name: "Junio", Total: 2000 },
];


const Container = styled.div`
    flex: 4;
    -webkit-box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52); 
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.52);
    padding: 20px;
    color: gray;


    .chartGrid{
        stroke: rgb(228, 225, 225);
    }
`;

const Title = styled.div`
    margin-bottom: 20px;
`;



const Chart = ({ aspect, title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area 
                    type="monotone" 
                    dataKey="Total" 
                    stroke="#8884d8" 
                    fillOpacity={1} 
                    fill="url(#Total)" 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart
