import { useState, useEffect, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spinner from './components/Spinner.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Lazy load components
const App = lazy(() => import('./App.jsx'));
const Movie = lazy(() => import('./components/Movie.jsx'));
const Series = lazy(() => import('./components/Series'));
const Details = lazy(() => import('./components/Details'));
const SearchCard = lazy(() => import('./components/SearchCard'));
const Page404 = lazy(() => import('./components/Page404'));

const spinnerRoot = document.getElementById('root');

const Root = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        {showSpinner ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/explore/movies' element={<Movie />} />
            <Route path='/explore/series' element={<Series />} />
            <Route path='/detail/:type' element={<Details />} />
            <Route path='/search' element={<SearchCard />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(spinnerRoot).render(<Root />);






















// import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Spinner from './components/Spinner.jsx';
// import App from './App.jsx';
// import Movie from './components/Movie.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Series from './components/Series';
// import Details from './components/Details';
// import Page404 from './components/Page404';
// import SearchCard from './components/SearchCard';

// const spinnerRoot = document.getElementById('root');

// const Root = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSpinner(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <BrowserRouter>
//       {showSpinner ? (
//         <Spinner />
//       ) : (
//         <Routes>
//           <Route path='/' element={<App />} />
//           <Route path='/explore/movies' element={<Movie />} />
//           <Route path='/explore/series' element={<Series/>} />
//           <Route path='/detail/:type' element={<Details/>} />
//           <Route path='/search' element={<SearchCard/>} />
//           <Route path='*' element={<Page404/>} />
//         </Routes>
//       )}
//     </BrowserRouter>
//   );
// };

// ReactDOM.createRoot(spinnerRoot).render(<Root />);



// import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import Spinner from './components/Spinner.jsx';
// import Movie from './components/Movie.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const spinnerRoot = document.getElementById('root');

// const Root = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSpinner(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <BrowserRouter>
//       {showSpinner ? <Spinner /> : <App />}
//       <Routes>
//         <Route path='/explore/:type' element={<Movie />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// ReactDOM.createRoot(spinnerRoot).render(<Root />);
