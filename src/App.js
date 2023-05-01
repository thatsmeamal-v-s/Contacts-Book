import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
