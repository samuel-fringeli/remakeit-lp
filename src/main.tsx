import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';
import { CircularProgress } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Suspense
			fallback={
				<div className="flex w-screen h-screen items-center justify-center">
					<CircularProgress classes={{ svg: 'text-primary' }} />
				</div>
			}
		>
			<App />
		</Suspense>
	</StrictMode>
);
