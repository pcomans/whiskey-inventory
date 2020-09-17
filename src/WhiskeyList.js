import React from "react";
import WhiskeyItem from "./WhiskeyItem";
import {AllSelected} from "./FilterSelector"

function WhiskeyList({ whiskeys, filter }) {
  const filteredWhiskeys = whiskeys.filter((w) => {
    return filter === AllSelected || w.status === filter;
  });
  return (
    <div className="WhiskeyList">
      {filteredWhiskeys.map((w) => {
        return <WhiskeyItem whiskey={w} key={`${w.brand} ${w.collection} ${w.year}`}></WhiskeyItem>;
      })}
      {filteredWhiskeys.length === 0 && <p>Nothing to see here!</p>}
    </div>
  );
}
export default WhiskeyList;
