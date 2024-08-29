import React, { useState } from "react";
import Input from "./Input";

const Modal = ({ show, setShowModal }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  if (!show) return "";
  return (
    <div
      className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden 
  "
    >
      <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]">
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
        <Input
          name="Book Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="Book Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <Input
          name="Book Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Input
          name="Book Price?"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <button className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
