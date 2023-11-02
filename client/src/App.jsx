// need this to be able to cycle between ReactDOM elements
// these ReactDOM elements are defined in our Pages and Components directories and imported into main.jsx
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Outlet />
    </>
  );
}