import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import axios from "axios";

const Charts = () => {
  const getFacts = async () => {
    const res = await axios(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return res.data;
  };

  const result = useQuery({
    queryKey: "randomFacts",
    queryFn: getFacts,
    initialData: {},
  });
  console.log(result);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    animate: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["2021", "2022", "2023"];

  const data = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: Object.keys(result).length !== 0 ? result.data.cases : [],
        borderColor: "#0086b3",
        backgroundColor: "#000000",
      },
      {
        label: "Deaths",
        data: Object.keys(result).length !== 0 ? result.data.deaths : [],
        borderColor: "#ff1a1a",
        backgroundColor: "#000000",
      },
      {
        label: "Recovered",
        data: Object.keys(result).length !== 0 ? result.data.recovered : [],
        borderColor: "#4dff4d",
        backgroundColor: "#000000",
      },
    ],
  };

  if (result.isError) {
    return <div>Error! {result.error.message}</div>;
  }

  return (
    <>
      {result.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Line options={options} data={data} />
      )}
    </>
  );
};

export default Charts;
