import { PanelsList } from "./components/Panel/PanelsList";

function App() {
  return (
    <div className="App">
      <h1>Ex 1.</h1>
      <h2>please change code to manage following use cases</h2>
      <h3>max 2 panels open</h3>
      <p>we have to keep max 2 panels open at once (when you'll click 3rd the firstly clicked one should will close) </p>
      <PanelsList maxOpened={2} initiallyOpened={[]}/>
      <h3>max 1 panel open and first panel open by default dif styles, (when you'll click 2nd the firstly clicked one should will close)</h3>
      <p>in this case we have to keep open only one panel at once and the first panel must be open by default. Vertical spacing between panels must be equal 25px</p>
      <PanelsList maxOpened={1} initiallyOpened={["Panel A"]} panelMargin={25}/>
    </div>
  );
}

export default App;
