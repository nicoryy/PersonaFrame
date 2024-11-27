"use client";

import React from "react";

function AlertCompo() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10">
      <div className="container mx-auto p-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-content">
            <h2 className="card-title">
              Width: {width}px Height: {height}px
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertCompo;
