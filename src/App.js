
import {useState} from "react";
import {validateNif} from "./utils/validateNif";

function App() {
  const [nif, setNif] = useState("");
  const [result, setResult] = useState("");
  
  const handleSubmit = () => {
    setResult(validateNif(nif));
  }
  
  return (
    <div className="App">
      <form className="nif-form" onSubmit={handleSubmit}>
        <label htmlFor="nif">NIF</label>
        <input value={nif} onChange={e => setNif(e.target.value)} placeholder="Inserir nif..." type="number" maxLength="9" />
      </form>
      <div className="nif-result">{result}</div>
    </div>
  );
}

export default App;
