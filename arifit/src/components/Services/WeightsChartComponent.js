import React, {useState} from "react";
import { ResponsiveLine } from "@nivo/line";

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
        //tickValues: "every 2 days",
        // tickRotation: -90,
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
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
    )
  </div>
);
};

export default WeightsChart;

