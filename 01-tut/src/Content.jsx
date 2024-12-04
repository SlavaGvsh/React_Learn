import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState(
    //  JSON.parse(localStorage.getItem("todolist")) || []
    [
      {
        id: 1,
        cheched: false,
        item: "Lorem",
      },
      {
        id: 2,
        cheched: false,
        item: "Lorem",
      },
      {
        id: 3,
        cheched: true,
        item: "Lorem",
      },
    ]
  );
  const handleCheckboxChange = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, cheched: !item.cheched } : item
    );
    setItems(listItem);
    localStorage.setItem("todolist", JSON.stringify(listItem));
    // setItems((prevItems) =>
    //    prevItems.map((item) =>
    //      item.id === id ? { ...item, cheched: !item.cheched } : item
    //    )
    //  );
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <main>
      Content
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <span>{item.id}</span>
              <span>{item.item}</span>
              <label
                //  htmlFor={item.id}
                onDoubleClick={() => handleCheckboxChange(item.id)}
              ></label>
              <input
                type="checkbox"
                //  id={item.id}
                checked={item.cheched}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            color: "red",
            padding: "5px",
          }}
        >
          {" "}
          Your list is Empty!
        </p>
      )}
      <FaTrashAlt role="button" tabIndex="0" />
      <p>
        {items.length <= 1 ? "element" : "elements"} {items.length}
      </p>
    </main>
  );
};

export default Content;
