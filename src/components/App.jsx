import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [updated, setUpdated] = useState(data);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleClick = () => {
    console.log(data);
    setUpdated((oldData) => [...oldData, data]);
    setData("");
  };
  const handleDelete = (id) => {
    setUpdated((oldData) => oldData.filter((elem, index) => index !== id));
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={data} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {updated.map((items, id) => {
            return (
              <li>
                {items}
                &nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(id)}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
        <div>
          {/* {
updated.map((item, id) => (
<div key={id}>
<b>{item} </b><button onClick={() => handleDelete(id)}>X</button>

</div>
))
} */}
        </div>
      </div>
    </div>
  );
}

export default App;
