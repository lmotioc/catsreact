import React, { useState, useEffect } from "react";
import CatDataService from "../services/CatService";

const Cat = props => {
  const initialCatState = {
    id: null,
    name: "",
    description: ""
  };
  const [currentCat, setCurrentCat] = useState(initialCatState);
  const [message, setMessage] = useState("");

  const getCat = id => {
    CatDataService.get(id)
      .then(response => {
        setCurrentCat(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  //update detail panel
  useEffect(() => {
    getCat(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCat({ ...currentCat, [name]: value });
  };

  const updateDescription = description => {
    var data = {
      id: currentCat.id,
      title: currentCat.title,
      description: description
    };

    CatDataService.update(currentCat.id, data)
      .then(response => {
        setCurrentCat({ ...currentCat, description: description });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCat = () => {
    CatDataService.update(currentCat.id, currentCat)
      .then(response => {
        console.log(response.data);
        setMessage("The cat was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCat = () => {
    CatDataService.remove(currentCat.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/cats");
      })
      .catch(e => {
        console.log(e);
      });
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

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCat.published ? "Published" : "Pending"}
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteCat}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCat}
          >
            Update
          </button>
          <p>{message}</p>
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
