import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function Entries(elements){
    return <Entry 
        key={elements.id}
        name={elements.name}
        icon={elements.emoji}
        description={elements.meaning}
    />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(Entries)}
      </dl>
    </div>
  );
}

export default App;

