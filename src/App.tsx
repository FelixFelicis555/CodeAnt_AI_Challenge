import { useState } from 'react';
import AppLayout from './applayout';
import Repositories from './components/repositories';
import { menuContext } from './contexts/menu';
import { Auth, SASS ,Self } from './components/auth';
import UnderDevelopment from './components/ongoing';
import Sidebar from './components/sidebar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const [state,set]=useState(false);
  const router=createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <div
              className={`absolute w-full md:relative md:w-[88%] md:top-0 top-[5rem] ${
                state && "md:blur-none blur-sm"
              }`}
            >
              <Repositories />
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: "repositories",
          element: <Repositories />,
        },
        {
          path: "code-review",
          element: <UnderDevelopment />,
        },
        {
          path: "cloud-security",
          element: <UnderDevelopment />,
        },
        {
          path: "how-to-use",
          element: <UnderDevelopment />
        },
        {
          path: "settings",
          element: <UnderDevelopment />,
        },
        {
          path: "report",
          element: <UnderDevelopment />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "saas",
          element: <SASS/>,
        },
        {
          path: "self-hosted",
          element: <Self />,
        },
      ],
    },
  ]);
 return (
<>
      <menuContext.Provider value={{ state, set }}>
        <RouterProvider router={router}></RouterProvider>
      </menuContext.Provider>
    </>
 );
}

export default App;
