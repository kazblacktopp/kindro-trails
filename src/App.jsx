import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout.js';
import Home from './pages/Home/Home.jsx';
import SearchOptions from './components/Search/SearchOptions';
import CountryListPage from './components/Search/SearchByCountry/CountryList/CountryListPage';
import StateListPage from './components/Search/SearchByCountry/StateList/StateListPage';
import TrailListPage from './components/Search/SearchByCountry/TrailList/TrailListPage';
import TrailPage from './components/Trail/TrailPage/TrailPage';
import NewTrail from './components/NewTrail/NewTrail';

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/search', element: <SearchOptions /> },
				{ path: '/search/country', element: <CountryListPage /> },
				{ path: 'search/country/state', element: <StateListPage /> },
				{
					path: 'search/country/state/trail',
					element: <TrailListPage />,
				},
				{ path: 'trail', element: <TrailPage /> },
				{ path: 'new-trail', element: <NewTrail /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

