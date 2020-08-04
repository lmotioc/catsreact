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


    http.post('/cats', {
    Name: currentCat.name,
    Description: currentCat.description,
    Id: parseInt(currentCat.id,10)
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  props.history.push("/cats");

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
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                value={currentCat.id}
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
