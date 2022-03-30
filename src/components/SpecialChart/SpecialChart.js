import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parts[1],
          };
          return ph;
        });
        setPhones(phoneData);
      });
  }, []);
  return (
    <BarChart width={800} height={400} data={phones}>
      <Bar dataKey="value" fill="#8884d8"></Bar>
      <XAxis></XAxis>
      <YAxis></YAxis>
    </BarChart>
  );
};

export default SpecialChart;
