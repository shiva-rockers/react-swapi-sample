import { MantineProvider } from '@mantine/core';
import { theme } from './presentation/theme';
import AppRouter from './presentation/routes/AppRouter';
import './App.scss';

export default function App() {
	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<AppRouter />
		</MantineProvider>
	);
}
