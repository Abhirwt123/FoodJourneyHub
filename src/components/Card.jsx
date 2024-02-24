import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Card = ({title,imgUrl,id}) => {
  const getId =useContext(AppContext)
  const navigate=useNavigate();
  const handelDetailPage=()=>{
    getId.setCardId(id)
    navigate(`/detail/${id}`)
  }
  return (
    <div className="flex gap-4 lg:mt-10  ">
      <div className="crd" onClick={handelDetailPage}>
       <div className="item-img rounded-xl overflow-hidden h-64 lg:max-w-[256px] max-w-full">
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
