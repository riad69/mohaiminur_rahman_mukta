import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function AreaCharts({ data }) {
  return (
    <div className="overflow-x-auto">
      <AreaChart
        width={1100}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={data} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="deal_status" stroke="blue" />
        <Area type="monotone" dataKey="deal_status" stroke="pink" />
      </AreaChart>
    </div>
  );
}

export default AreaCharts;
