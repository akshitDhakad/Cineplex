import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

const LazyApp = React.lazy(() => import('./App'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyApp />
      </Suspense>
    </div>
  );
}

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);




// old code  with reactDom method 

// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom'; // Import ReactDOM

// const LazyApp = React.lazy(() => import('./App'));

// function App() {
//   return (
//     <div className='App'>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyApp />
//       </Suspense>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));







  //  ******  old  code ************************************************************


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div className='App'>
//     <App />
//   </div>
// );


