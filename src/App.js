import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from './components/NotFound/NoMatch';
import UserListings from './components/userComponents/UserListings';
import Layout from './components/Layouts/Layout';
import UserDetails from './components/userComponents/UserDetails';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<UserListings/>}/>
          <Route path="/user/:id" exact element={<UserDetails/>}/>
          <Route path="*" exact element={<NoMatch/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
