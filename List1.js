


import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [myShot, setMyShot] = useState("Goal");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myShot} onChange={handleChange}>
        <option value="Goal">Goal</option>
        <option value="Missed">Missed</option>
        <option value="Nice-try">Nice-try</option>
      </select>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


