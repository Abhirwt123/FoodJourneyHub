import React from "react";

const Card = ({title,imgUrl}) => {
  return (
    <div className="flex gap-4 mt-10">
      <div className="crd">
       <div className="item-img rounded-xl overflow-hidden h-64 max-w-[256px]">
       <img
          src={imgUrl}
          alt="food item"
          className="h-full w-full object-cover"
        />
       </div>
       <div className="name text-center text-white text-xl pt-4">
       {title.slice(0,20)+"....."}
       </div>
      </div>
    </div>
  );
};

export default Card;
