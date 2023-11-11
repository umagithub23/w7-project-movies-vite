import { Route, Routes } from "react-router-dom";
import { PopularList } from "../components/movies/PopularList";
import { Detail } from "../components/movies/Detail";
import { NotFoundPage } from "../components/NotFoundPage";

const routes = (
  <Routes>
    <Route path="/" element={<PopularList />} />
    <Route path="/movies/:movieId" element={<Detail />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default routes;
