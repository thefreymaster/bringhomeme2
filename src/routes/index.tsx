import { Routes, Route } from "react-router-dom";
import { NotFound } from "../component/Error";
import { Profile } from "../component/Profile";
import { Welcome } from "../component/Welcome";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/error" element={<NotFound />} />
      <Route path="/:petId" element={<Profile />} />
    </Routes>
  );
};

export default Router;
