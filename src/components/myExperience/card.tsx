import { motion } from "framer-motion";
import React from "react";

type TCard = {
  company: string;
  duration: string;
  position: string;
  url:string
};
const Card: React.FC<TCard> = (props: TCard) => {
  const { company, duration, position,url } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      onClick={() => {window.open(url)}}
      className="inline-flex flex-col border border-gray-300 rounded-md px-6 py-4 w-full cursor-pointer"
    >
      <p className="font-bold">{company}</p>
      <p className="font-medium text-gray-400">{duration}</p>
      <p className="font-semibold">{position}</p>
    </motion.div>
  );
};

export default Card;
