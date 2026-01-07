import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./app.css";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { moviesData } from "./api/GetAPIData";
import { movieDetails } from "./api/GetMovieDetail";
import { MovieDetails } from "./components/UI/MovieDetails";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />,
          action : contactData
        },
        {
          path: "/movie",
          element: <Movie />,
          loader : moviesData 
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader : movieDetails 
        },

      ]
    },

  ])


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>

  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/movie" element={<Movie />} />

  //     </Route>

  //   ));



  return <RouterProvider router={router} />

}

export default App;