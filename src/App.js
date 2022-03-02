import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './components/Page';
import { Home } from './components/pages/home/Home';
import { Example } from "./components/pages/example/Example";
import { Error } from "./components/pages/error/Error";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="example-page" element={<Example />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}