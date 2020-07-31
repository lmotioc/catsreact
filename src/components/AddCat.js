import React, { useState, useEffect } from "react";
import http from '../http-common';

const Cat = props => {
  const initialCatState = {
    id: null,
    name: "",
    description: ""
  };
  const [currentCat, setCurrentCat] = useState(initialCatState);

  // this is called every time the one of the inputs is changed
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCat({ ...currentCat, [name]: value });
  };

  const createCat = () => {
    //todo 1. find where we keep the object and print it in console
    // 2. send a create request
    // 3. on success redirect to list

    // command to redirect to list
    // props.history.push("/cats"); 

    };

  return (
    <div>
      {currentCat ? (
        <div className="edit-form">
          <h4>Cat</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCat.title}
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
            onClick={createCat}
          >
            Submit
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
