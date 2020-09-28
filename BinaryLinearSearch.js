import React from "react";
import "./App.css";

function App() {
  let binaryCounter = 0;

  function binarySearch(array, query) {
    binaryCounter++;
    const middle = Math.floor(array.length / 2);

    if (array[middle] === query) {
      let result = {
        found: true,
        count: binaryCounter,
      };
      binaryCounter = 0;
      return result;
    } else if (array.length === 1) {
      let result = {
        found: false,
        count: binaryCounter,
      };
      binaryCounter = 0;
      return result;
    } else if (array[middle] > query) {
      return binarySearch(array.slice(0, middle), query);
    } else if (array[middle] < query) {
      return binarySearch(array.slice(middle, array.length), query);
    }
  }

  let linearCounter = 0;

  function linearSearch(array, query) {
    for (let i = 0; i < array.length; i++) {
      linearCounter++;
      if (array[i] === query) {
        let result = {
          found: true,
          count: linearCounter,
        };
        linearCounter = 0;
        return result;
      }
    }
    let result = {
      found: false,
      count: linearCounter,
    };
    linearCounter = 0;
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dataset = e.target.dataset.value;
    const query = e.target.query.value;
    const result = document.getElementById("result");

    if (!dataset || !query) {
      result.innerText = "Please provide a Dataset and Search Term";
      return;
    }

    const binaryCount = binarySearch(dataset.split(" ").sort(), query);
    const linearCount = linearSearch(dataset.split(" "), query);

    if (!binaryCount.found) {
      return (result.innerText = `After ${binaryCount.count} binary searches \n and ${linearCount.count} linear searches, \n the search term was not found`);
    }

    return (result.innerText = `It took ${binaryCount.count} steps with binary search \n and ${linearCount.count} steps with linear search`);
  }

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "0 auto",
  };

  return (
    <div className="App">
      <h1>Linear vs Binary Search</h1>
      <p>How many steps does each take?</p>

      <form style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="dataset">Dataset to Search</label>
        <textarea id="dataset"></textarea>

        <label htmlFor="query">Search Term</label>
        <input type="text" id="query"></input>

        <br></br>

        <button>Submit</button>
      </form>

      <h2 id="result"></h2>
    </div>
  );
}

export default App;
