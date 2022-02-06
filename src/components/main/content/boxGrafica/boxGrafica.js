import "./boxGrafica.css";

// recharts 
import React, { PureComponent,Fragment } from 'react';
import {Area, ReferenceLine, Legend,ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function boxGrafica(){
    const data = [
        { x: 0.2, y: 0.28},
        { x: 0.22, y: 0.294},
        { x: 0.21, y: 0.29,},
        { x: 0.212, y: 0.313},
        { x: 0.223, y: 0.3 },
        { x: 0.23, y: 0.31}, 
        { x: 0.232, y: 0.32}, 
        { x: 0.25, y: 0.35}, 
        { x: 0.24, y: 0.335}, 
        { x: 0.27, y: 0.4}, 
        { x: 0.3, y: 0.5}, 
        { x: 0.32, y: 0.51}, 
        { x: 0.39, y: 0.47}, 
        { x: 0.38, y: 0.45}, 
        { x: 0.3, y: 0.44}, 
        { x: 0.22, y: 0.26}, 
        { x: 0.30, y: 0.39}, 
        { x: 0.37, y: 0.34}, 
        { x: 0.22, y: 0.27}, 
        { x: 0.29, y: 0.32}, 
        { x: 0.3, y: 0.15}, 
        { x: 0.25, y: 0.2}, 
        { x: 0.26, y: 0.29}, 
        { x: 0.23, y: 0.23}, 
        { x: 0.24, y: 0.24}, 
        { x: 0.25, y: 0.25}, 
        { x: 0.26, y: 0.26}, 
        { x: 0.27, y: 0.27}, 
        { x: 0.3, y: 0.224}, 
        { x: 0.3, y: 0.19}, 
        { x: 0.31, y: 0.202}, 
        { x: 0.313, y: 0.218}, 
        { x: 0.323, y: 0.23}, 
        { x: 0.335, y: 0.29}, 
        { x: 0.3, y: 0.3}, 
        { x: 0.31, y: 0.31}, 
        { x: 0.32, y: 0.32}, 
        { x: 0.33, y: 0.33}, 
        { x: 0.34, y: 0.35}, 
        { x: 0.38, y: 0.4}, 
      ];
      
    
      
   return(

        <Fragment> 

<ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="volatility" unit="" label={{value:"Volatility", position:"insideBottomRight", offset:-10}}/>
          <YAxis type="number" dataKey="y" name="return" unit="" label={{value:"Expected Return", position:"insideLeft", angle:-90}}/>
         <ReferenceLine x={0.2} label="Optimal portfolio" stroke="green" />
          <Legend/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Simulated Porfolios" data={data} fill="#8884d8" />

        </ScatterChart>
      </ResponsiveContainer>
   


        </Fragment>

   );    
}

export default boxGrafica;