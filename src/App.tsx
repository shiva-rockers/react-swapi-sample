import { MantineProvider } from '@mantine/core';

import AppRouter from './presentation/routes/AppRouter';
import { theme } from './presentation/theme';
import './App.scss';

export default function App() {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <AppRouter />
        </MantineProvider>
    );
}
