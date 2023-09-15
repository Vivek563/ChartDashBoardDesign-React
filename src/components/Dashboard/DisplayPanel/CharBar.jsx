import "./MainPanel.css"


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Week 1",
    Guest: 400,
    User: 500,
    amt: 500
  },
  {
    name: "Week 2",
    Guest: 450,
    User: 350,
    amt: 500
  },
  {
    name: "Week 3",
    Guest: 300,
    User: 200,
    amt: 500
  },
  {
    name: "Week 4",
    Guest: 350,
    User: 450,
    amt: 500
  },
  
  
  
];

export default function CharBar() {
  return (
    <BarChart
      width={1050}
      height={300}
      data={data}
      margin={{
        top: 10,
        right:-20,
        left: 80,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="User" fill="#98d89e" />
      <Bar dataKey="Guest" fill="#ee8484" />
    </BarChart>
  );
}
