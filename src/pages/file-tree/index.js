import React from "react";
import Folder from "./folder";
import explorer from "./data";

const FileTree = () => {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
};

export default FileTree;
