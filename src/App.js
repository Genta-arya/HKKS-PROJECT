import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import React, { useEffect, useState } from "react";
import DetailNotFound from "./View/notfount/notfound";
import SplashScreen from "./View/splash/splash";
import Index from "./View/users/landingpage/Index";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Index />} />
         
          <Route path="*" element={<DetailNotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
