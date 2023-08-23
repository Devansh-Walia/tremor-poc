import { Card, Title, LineChart, AreaChart } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 9.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 8.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 7.88,
    "Import Growth Rate": 1.67,
  },
  {
    year: 1975,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 2.34,
  },
  {
    year: 1976,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 4.58,
  },
  {
    year: 1977,
    "Export Growth Rate": 3.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1978,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 5.61,
  },
  {
    year: 1979,
    "Export Growth Rate": 4.88,
    "Import Growth Rate": 2.67,
  },
  {
    year: 1979,
    "Export Growth Rate": 4.88,
    "Import Growth Rate": 2.67,
  },
  {
    year: 1979,
    "Export Growth Rate": 4.88,
    "Import Growth Rate": 2.67,
  },
  {
    year: 1979,
    "Export Growth Rate": 4.88,
    "Import Growth Rate": 2.67,
  },
  //...
];

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

const LineChartPage = () => (
    <div className="overflow-hidden ">
  <Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      curveType="natural"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
    //   valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
  <Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <AreaChart
      className="mt-6"
      data={chartdata}
      index="year"
      curveType="monotone"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
  </div>
);

export default LineChartPage