/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItems = ({ newItems, setNewItems, heandlSudlit }) => {
  const inputRef = useRef(0);
  console.log(inputRef.current);

  return (
    <form className="add-form" onSubmit={heandlSudlit}>
    
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addForm"
        placeholder="Add Item"
        required
        value={newItems}
        onChange={(e) => {
          setNewItems(e.target.value);
        }}
        
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
    
  );
};

export default AddItems;
