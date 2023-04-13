import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import PersonalInfo from "./components/PersonalInfo";
import CovidSurvey from "./components/CovidSurvey";
import Vaccine from "./components/Vaccine";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/personalInfo", element: <PersonalInfo /> },
  { path: "/covidsurvey", element: <CovidSurvey /> },
  { path: "/vaccine", element: <Vaccine /> },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}>
        <Welcome />
      </RouterProvider>
    </main>
  );
};

export default App;
