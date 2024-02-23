import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"

const LetterMeals = () => {
  const letter = useContext(AppContext);
  const navigate = useNavigate();
  const handelLetter = (e) => {
    // console.log(e.target.innerText);
    navigate(`/letter/${e.target.innerText}`);
    letter.setLetter(e.target.innerText);
  };
  return (
    <div className="p-20 bg-amber-700" id="letter">
      <p className="text-white text-center font-bold text-3xl pt-10 pb-4">
        Search Meals by Letter
      </p>
      <p className="text-4xl text-center mt-6 flex justify-center items-center flex-wrap gap-4">
        {[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ].map((ltr) => (
          <motion.div
          key={ltr}
            className="box bg-amber-950 w-16 h-16 leading-[55px] rounded-full cursor-pointer letterWrap drop-shadow-2xl"
            whileHover={{ scale: 1.2 }}
            onClick={handelLetter}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span
              
              className=" font-semibold"
            >
              {ltr}
            </span>
          </motion.div>
        ))}
      </p>
    </div>
  );
};

export default LetterMeals;
