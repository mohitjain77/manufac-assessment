import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScatterPlot from './components/ScatterPlot';
import BarChart from './components/BarChart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Added routes to Scatter Plot and Bar Chart
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ScatterPlot />,
      },
      {
        path: "/barChat",
        element: <BarChart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={appRouter} />
);

