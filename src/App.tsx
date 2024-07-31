import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SectionFeaturesMulti2 from "./pages/SectionFeaturesMulti2";
import SectionFeaturesMulti from "./pages/SectionFeaturesMulti";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sectionfeaturesmulti78":
        title = "";
        metaDescription = "";
        break;
      case "/sectionfeaturesmulti82":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/sectionfeaturesmulti78"
        element={<SectionFeaturesMulti2 />}
      />
      <Route
        path="/sectionfeaturesmulti82"
        element={<SectionFeaturesMulti />}
      />
    </Routes>
  );
}
export default App;
