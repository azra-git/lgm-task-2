import "./App.css"
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { Users } from "./Components/Users";
import { About } from "./Components/About";




export default function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    setTimeout(() => {
      call();
    }, 3000);
  };

  React.useEffect(() => {
    setLoading(false);
  }, [users]);

  const call = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const json = await res.json();
    setUsers(json.data);
  };

  return (

    <Router>

      <Header getdata={getData} />

      <Routes>

        <Route exact path="/" element={<Users isLoading={isLoading} getdata={getData} data={users} />} >

        </Route>

        <Route exact path="/about" element={<About />} >

        </Route>


      </Routes>


    </Router>

  );
}