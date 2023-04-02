import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from './components/NotFound/NoMatch';
import UserListings from './components/userComponents/UserListings';
import Layout from './components/Layouts/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<UserListings/>}/>
          <Route path="*" exact element={<NoMatch/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
