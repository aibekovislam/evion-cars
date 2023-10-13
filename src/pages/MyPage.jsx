import React from "react";
import me from "../css/images/baimurat.jpg";
import islam from "../css/images/islam.jpg";
import "../css/my.scss";

function MyPage() {
  return (
    <>
      <div className="my-container">
        <h2>Этот сайт делали мы </h2>
        <img src={me} />
        <img src={islam} />
      </div>
    </>
  );
}

export default MyPage;
