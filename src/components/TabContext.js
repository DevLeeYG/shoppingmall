import React, { useEffect } from "react";

const TabContext = ({ tab, setSwitch }) => {
  useEffect(() => {
    setSwitch(true);
  });

  if (tab === 0) {
    return <div>0번째변경</div>;
  } else if (tab === 1) {
    return <div>1번째변경</div>;
  }
};

export default TabContext;
