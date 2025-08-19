import React from "react";

type InfoCardProps = { title: string; value: string };

const InfoCard = ({ title, value }: InfoCardProps) => (
  <div className="border-2 border-sky-700 rounded-lg p-6 text-center mx-2 min-w-[500px]">
    <div className="text-3xl font-bold text-sky-700 mb-2">{title}</div>
    <div className="text-2xl font-semibold">{value}</div>
  </div>
);


export default InfoCard;