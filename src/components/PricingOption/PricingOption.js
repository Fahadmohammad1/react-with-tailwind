import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 text-2xl font-bold rounded">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-gray-500 font-bold text-xl">/Mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benifits</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold">
        Buy Now <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
