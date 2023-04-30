import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import AddContact from "./Components/AddContact/AddContact";
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Contacts />}></Route>
              <Route path="/createcontact" element={<AddContact />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
