import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Charts from "./Components/Charts/Charts";
import Maps from "./Components/Maps/Maps";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="contacts-container">
            <Routes>
              <Route path="/" element={<Contacts />}></Route>
              <Route path="/createcontact" element={<AddContact />}></Route>
              <Route path="/editcontact" element={<EditContact />}></Route>
              <Route path="/charts" element={<Charts />}></Route>
              <Route path="/maps" element={<Maps />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
