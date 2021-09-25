import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accesskey:"4Kw4r5Zn7f9lrS1kof6m4pw1Qe1-U60TyOASKQ0wYhA",
})
 export default function SearchPhotos() {
     const [query, setQuery] = useState("");
     const searchPhotos = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
      };

    return (
    
      <form className = "form" onSubmit={searchPhotos} >
        <label className = "label" htmlFor="query">
        {""}
        📷
        </label>
        <input
            type="text"
            name="query"
            className="input"
            placeholder="try dog or apple"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type = "submit" className="button">
            Search
            </button>
        </form>
      
    );
  }