import { Routes, Route } from "react-router-dom";
import Login from "components/Login";
import Signup from "components/Signup";
import UserPage from "components/UserPage";
import NotFound from "components/NotFound";

function App() {
  return (
    <>
     <h1 className="text-center text-3xl font-bold">
      Hello world!
    </h1>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/userpage" element={<UserPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
