import React from "react";
import "./Loader.css"; // Ensure you add this in your project

const Loader = () => {
  return (
    <div className="loader-container">
      <div id="ui">
        <div className="dice">
          <ol className="dice_list">
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
          </ol>
        </div>
        <div className="dice">
          <ol className="dice_list">
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
          </ol>
        </div>
        <div className="dice">
          <ol className="dice_list">
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
            <li className="dice_list_item"></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Loader;
