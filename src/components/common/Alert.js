import React from "react";

const status = [
    {
        id: '0',
        status: 'success',
        srcimg: 'https://cdn-icons-png.flaticon.com/512/7024/7024188.png',
        title : 'All done!',
        content: 'Things are going nice',
        btn :'Continue'
    },
    {
        id: '1',
        status: 'fail',
        srcimg: 'https://cdn-icons-png.flaticon.com/512/7024/7024209.png',
        title : 'Opps!',
        content: 'Something went wrong',
        btn :'Try again'
    }
]
const Alert = ({ className, id }) => {
    const setStatus = status[id];
  return (
    <div
      className={` absolute ${className} w-[20%] h-[40vh] bg-primary rounded-[20px] top-[10%] right-auto flex flex-col items-center p-3 pb-[20px]`}
      style={{
        boxShadow: "1px 2px 9px #fff",
      }}
    >
      <h2 className="text-[#111] font-[600] text-[30px] mb-[10px]">{setStatus.title}</h2>
      <img
        src={setStatus.srcimg}
        className="w-[35%] h-[35%] object-contain mb-[10px]"
        alt=""
      />
      <span className="text-[#111] text-[18px] font-[500] mb-[10px] normal-case flex-grow pt-[10px]">
        {setStatus.content}
      </span>
      <button className="px-[15px] py-[8px] text-[#111] border-[2px] border-solid rounded-[12px] hover-btnalert border-[#111]">
        {setStatus.btn}
      </button>
    </div>
  );
};

export default Alert;
