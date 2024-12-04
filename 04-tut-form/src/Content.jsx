import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AddItems from "./AddItems.jsx";

const Content = () => {
  const [items, setItems] = useState(
    //  JSON.parse(localStorage.getItem("todolist")) || []
    [
      // {
      //   id: 1,
      //   cheched: false,
      //   item: "Lorem",
      // },
      // {
      //   id: 2,
      //   cheched: false,
      //   item: "Lorem",
      // },
      // {
      //   id: 3,
      //   cheched: true,
      //   item: "Lorem",
      // },
    ]
  );
  const [newItems, setNewItems] = useState("");
  // const [serchItem, setSerchItem] = useState("");

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
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("todolist", JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, cheched: false, item };
    const listItem = [...items, myNewItem];
    setAndSaveItems(listItem);
  };
  const heandlSudlit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    console.log(newItems);
    setNewItems("");
  };
  return (
    <main>
      <AddItems
        newItems={newItems}
        setNewItems={setNewItems}
        heandlSudlit={heandlSudlit}
      />
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
