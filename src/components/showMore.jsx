import { useState } from "react";
import "./showMore.css";

function ShowMore(props) {
  const [isExtended, setisExtended] = useState(false);

  const toggleShowMore = () => {
    setisExtended(!isExtended);
  };

  return (
    <div className="show-more-div">
      {isExtended ? <div className="content">{props.children}</div> : <div />}
      <button onClick={toggleShowMore}>
        {isExtended ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default ShowMore;
