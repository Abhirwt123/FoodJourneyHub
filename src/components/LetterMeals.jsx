import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LetterMeals = () => {
  const letter = useContext(AppContext);
  const navigate = useNavigate();
  const handelLetter = (e) => {
    // console.log(e.target.innerText);
    navigate(`/letter/${e.target.innerText}`);
    letter.setLetter(e.target.innerText);
  };
  return (
    <div className="px-20 py-4 bg-amber-700">
      <p className="text-white text-center font-bold text-3xl mt-10 pb-4">
        Search Meals my Letter
      </p>
      <p className="text-2xl text-center mt-6">
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
          <span
            key={ltr}
            className="text-white font-semibold mr-4 cursor-pointer"
            onClick={handelLetter}
          >
            {ltr}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LetterMeals;
