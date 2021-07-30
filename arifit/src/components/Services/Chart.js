import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import Title from './Title';

async function getWeights(email) {
  return fetch('/getWeights', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
    .then(data => data.json())
}

const Chart = ({user, updateWeights, setUpdateWeights}) => {
  const theme = useTheme();

  const [createDataResult, setCreateDataResult] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const createData = async () => {
    
    if(updateWeights === true){
      let email = user.usuario.email;
      const weights = await getWeights({email});
      if(weights.ok === true){
        let creatingData = new Array();
    
        weights.weights.forEach(element => {
          let elementWeight = element.weight[0];
        var date = new Date(element.date);
          var newDate = (date.getFullYear() + '-' +('0' + (date.getMonth()+1)).slice(-2)+ '-' +  ('0' + date.getDate()).slice(-2));
          creatingData = [...creatingData, {day: newDate, Peso: elementWeight}];
        });
        setCreateDataResult(creatingData);
        setUpdateWeights(false);
      }
  
    }else if(isFirstTime === true){
      let email = user.usuario.email;
      const weights = await getWeights({email});
      if(weights.ok === true){
        let creatingData = new Array();
    
        weights.weights.forEach(element => {
          let elementWeight = element.weight[0];
          var date = new Date(element.date);
          var newDate = (date.getFullYear() + '-' +('0' + (date.getMonth()+1)).slice(-2)+ '-' +  ('0' + date.getDate()).slice(-2));
          creatingData = [...creatingData, {day: newDate, Peso: elementWeight}];
        });
      
        setCreateDataResult(creatingData);
        setIsFirstTime(false);
      }
    }
  }

  createData();

  return (
    <React.Fragment>
      <Title>Mejora del peso</Title>
      <ResponsiveContainer>
        <LineChart
          data={createDataResult}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Peso (Kg)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="Peso" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;