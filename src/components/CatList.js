import React, { useState, useEffect } from "react";
import CatDataService from "../services/CatService";
import { Link } from "react-router-dom";

const CatList = () => {
  const [cats, setCats] = useState([
    {
      "name": "placeholder",
      "description": "placeholder",
      "id": 1
    },
    {
      "name": "placeholder",
      "description": "placeholder",
      "id": 2
    }
  ]);
  const [currentCat, setCurrentCat] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  

  const setActiveCat = (cat, index) => {
    setCurrentCat(cat);
    setCurrentIndex(index);
  };

  const getCats = () => {
  http.get('/cats')
  .then(function (response) {
    // handle success
    console.log(response);
    setCats([...cats,...response.data]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  };


  useEffect(() => {
    getCats();
  },[]);
  
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Cats List</h4>
        <ul className="list-group">
          {cats &&
            cats.map((cat, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCat(cat, index)}
                key={index}
              >
                {cat.name}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentCat ? (
          <div>
            <h4>Cat</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentCat.name}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentCat.description}
            </div>
                        
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Cat...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatList;
