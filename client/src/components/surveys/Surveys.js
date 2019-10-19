import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";
const Surveys = () => {
  return (
    <div>
      <div className="container">
        <h2 className="center">Surveys list</h2>
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Surveys;
