import { useState } from "react";

export default function ShowHideText() {
  const [visible, setVisible] = useState(false); 

  function toggleText() {
    setVisible(!visible); 
  }

  return (
    <div>
      {visible && (
        <p>
          Hello! This text can be hidden.
        </p>
      )}
      <button onClick={toggleText}>
        Click to Hide/Show
      </button>

    </div>
  );
}
