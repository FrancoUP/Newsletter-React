import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import SubmitPage from "./pages/SubmitPage";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="thank-you" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
