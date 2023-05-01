import React, { useEffect, useState } from "react";
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
  // const getFacts = async () => {
  //   const res = await axios(
  //     "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  //   );
  //   let abc = await res.json();
  //   console.log(abc);
  //   return res.json();
  // };

  // const result = useQuery("randomFacts", getFacts);
  // const [cases, setCases] = useState(result);
  // console.log(result);

  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();

  useEffect(() => {
    const getFacts = async () => {
      const res = await axios(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      setCases(res.data.cases);
      setDeaths(res.data.deaths);
      setRecovered(res.data.recovered);
    };
    getFacts();
  }, []);

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
        data: cases,
        borderColor: "#0086b3",
        backgroundColor: "#000000",
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "#ff1a1a",
        backgroundColor: "#000000",
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "#4dff4d",
        backgroundColor: "#000000",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default Charts;
