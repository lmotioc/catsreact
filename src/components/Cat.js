import React, { useState, useEffect } from "react";
import CatDataService from "../services/CatService";

const Cat = props => {
  const initialCatState = {
    id: null,
    name: "",
    description: ""
  };
  const [currentCat, setCurrentCat] = useState(initialCatState);

  const getCat = id => {
    // get current cat by id similar to list but with id in relative url cats/id.
    // use string interpolation.
    // update the state "currentCat"
  };

  //update detail panel
  useEffect(() => {
    getCat(props.match.params.id);
  }, [props.match.params.id]);


  //abc

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCat({ ...currentCat, [name]: value });
  };

  const updateCat = () => {
    //todo 1. find where we keep the object and print it in console
    // 2. send a update request
    // 3. on success redirect to list

    props.history.push("/cats"); // resirects to cat list

    };

  return (
    <div>
      {currentCat ? (
        <div className="edit-form">
          <h4>Cat</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentCat.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCat.description}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button
            type="submit"
            className="btn btn-success"
            onClick={updateCat}
          >
            Update
          </button>
          
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Cat...</p>
        </div>
      )}
    </div>
  );
};

export default Cat;
