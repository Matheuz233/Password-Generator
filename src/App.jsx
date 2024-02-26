import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("**********");
  const [copyText, setCopyText] = useState("Copiar");

  function passwordGenerator() {
    setPassword(Math.random().toString(36).slice(-10));
    setCopyText("Copiar");
  } // Essa função gera uma senha de 10 dígitos

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  } // Essa função copia a senha para a área de transferência

  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="buttons">
        <button onClick={passwordGenerator}>Gerar</button>
        <button className="copyButton" onClick={copyToClipboard}>{copyText}</button>
      </div>
      <p>A sua senha aleatória é a seguinte:</p>
      <mark className="password">{password}</mark>
      <p className="footer">Clique no botão "Gerar" para gerar sua senha aleatória</p>
    </>
  );

}
export default App;
