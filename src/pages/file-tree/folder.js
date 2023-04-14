import React, { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <span onClick={()=>setExpand(!expand)}>{explorer.name}</span>
      <div style={{display :expand===true?"block":"none",paddingLeft:"10px"}}>
        {explorer.items.map((i, n) => {
          return <Folder explorer={i} key={n} />;
        })}
      </div>
    </div>
  );
};

export default Folder;
