import React, { useState, useEffect } from "react";
import CatDataService from "../services/CatService";
import http from '../http-common';

const Cat = props => {
  const initialCatState = {
    id: null,
    name: "",
    description: ""
  };
  const [currentCat, setCurrentCat] = useState(initialCatState);
  const [updatedCat, setUpdatedCat] = useState(initialCatState);

  const getCat = id => {
    // get current cat by id similar to list but with id in relative url cats/id.
    // use string interpolation.
    // update the state "currentCat"


    http.get('/cats/'+id)
  .then(function (response) {
    // handle success
    console.log(response);
    setUpdatedCat({name : response.data.name , description : response.data.description , id: response.data.id} )
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  };

  //update detail panel
  useEffect(() => {
    getCat(props.match.params.id);
  }, [props.match.params.id]);


  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdatedCat({ ...updatedCat, [name]: value });
  };

  const updateCat = () => {
    //todo 1. find where we keep the object and print it in console
    // 2. send a update request
    // 3. on success redirect to list

    
    http.put('/cats/'+updatedCat.id, {
      name: updatedCat.name,
      description: updatedCat.description,
      id: updatedCat.id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
     });




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
                value={updatedCat.name}
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
                value={updatedCat.description}
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
