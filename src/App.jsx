import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import TimedPosts from "./pages/TimedPosts";
import SavedPosts from "./pages/SavedPosts";
import DeletedPosts from "./pages/DeletedPosts";
import PricingPlans from "./pages/PricingPlans";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import UserAuthPage from "./pages/UserAuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreatePosts />} />
          <Route path="/timed" element={<TimedPosts />} />
          <Route path="/saved" element={<SavedPosts />} />
          <Route path="/deleted" element={<DeletedPosts />} />
          <Route path="/plans" element={<PricingPlans />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpAndSupport />} />
        </Route>
        <Route path="/authentication" element={<UserAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
