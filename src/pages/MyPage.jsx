import React from "react";
import me from "../css/images/baimurat.jpg";
import "../css/my.scss";

function MyPage() {
  return (
    <>
      <div className="my-container">
        <h2>Этот сайт делал я </h2>
        <img src={me} />
      </div>
    </>
  );
}

export default MyPage;
