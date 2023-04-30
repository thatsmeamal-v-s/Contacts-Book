import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="contacts-container">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
