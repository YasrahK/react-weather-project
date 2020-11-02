import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3 search-button">
            <button type="button" className="btn btn-outline-info">
              Search
            </button>
          </div>
          <div className="col-2 current-button">
            <button type="button" className="btn btn-outline-info">
              📍
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
