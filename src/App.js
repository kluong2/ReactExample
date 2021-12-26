import './App.css';
import './index.js';
import {data} from './index.js';
import {formatList} from './list.js';
import {getName} from './name.js';
function App() {


var displayData = (
<html>
<img src={data.imgURL} className="App-logo" alt="logo" />
<h1>
{getName(data)}
</h1>
<h2> <br/>My hobbies are:<br/>
</h2>
<ul>
{formatList(data)}
</ul>
</html>
);



  return (
    <div className="App">
      <header className="App-header">
		{displayData}
      </header>
    </div>
  );




}


export default App;
