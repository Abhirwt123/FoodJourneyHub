import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Letter from './components/Letter';
import AppStore from './context/AppStore';

function App() {
  return (
    <AppStore>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppStore>
  );
}
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />
      },
      {
        path: "/letter/:id",
        element: <Letter />
      }

    ]
  }
])

export default AppRouter;
