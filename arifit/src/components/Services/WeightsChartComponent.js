import React, {useState} from "react";
import { ResponsiveLine } from "@nivo/line";
import Title from "./Title";
import { useTheme } from '@material-ui/core/styles';

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


const WeightsChart = ({user, updateWeights, setUpdateWeights}) => {

    const theme = useTheme();

    const [createDataResult, setCreateDataResult] = useState([]);
    const [isFirstTime, setIsFirstTime] = useState(true);
    
    const createData = async () => {
      let email = user.usuario.email;
      const weights = await getWeights({email});
      if(weights.ok === true){
        let creatingData = new Array();
      
        weights.weights.forEach(element => {
          let elementWeight = element.weight[0];
          var date = new Date(element.date);
          var newDate = (date.getFullYear() + '-' +('0' + (date.getMonth()+1)).slice(-2)+ '-' +  ('0' + date.getDate()).slice(-2));
          creatingData = [...creatingData, {x: newDate, y: elementWeight}];
        });

        const newData = [
          {
            id: "Mejora Peso",
            data: creatingData
          }
        ];
        if(updateWeights === true){
          setCreateDataResult(newData);
          setUpdateWeights(false);

        }else if(isFirstTime === true){
          setCreateDataResult(newData);
          setIsFirstTime(false);
        }
        
      }
      
    }

  createData();

  return (
    <div style={{ height: 350 }} className="App">
    <Title>Mejora del peso</Title>
    <ResponsiveLine
      data={createDataResult}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d"
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false
      }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Mejora del peso respecto al tiempo",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      axisBottom={{
        format: "%b %d",
        legend: "Escala de tiempo",
        legendOffset: -12
      }}
      colors={{ scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
    />
    
  </div>
);
};

export default WeightsChart;

