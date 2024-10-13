import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
    colorScheme: 'dark',
    primaryColor: 'primary',
    primaryShade: 6,
    fontFamily: 'Outfit, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    fontSizes: {
        xs: '1rem', // 12px
        sm: '1rem', // 14px
        md: '1.25rem', // 16px
        lg: '1.5rem', // 18px
        xl: '1.8rem', // 20px
    },
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
    },
    shadows: {
        xs: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        sm: '0px 2px 6px rgba(0, 0, 0, 0.16)',
        md: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        lg: '0px 6px 20px rgba(0, 0, 0, 0.24)',
        xl: '0px 8px 30px rgba(0, 0, 0, 0.3)',
    },
    headings: {
        fontFamily: 'Outfit, sans-serif',
        sizes: {
            h1: {
                fontSize: '2.1rem',
                fontWeight: 700,
            },
            h2: {
                fontSize: '1.9rem',
                fontWeight: 600,
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 600,
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 500,
            },
            h5: {
                fontSize: '1.2rem',
                fontWeight: 500,
            },
        },
    },
    components: {
        TextInput: {},
        Select: {},
        BackgroundImage: {
            styles: {
                root: {
                    filter: 'blur(12px)',
                },
            },
        },
        Header: {
            styles: {
                root: {
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },
    colors: {
        primary: [
            '#CCE0FF',
            '#BAD0F3',
            '#9BACD9',
            '#5E77BC',
            '#4963AE',
            '#2F4070',
            '#232F53',
            '#1B2541',
            '#001A41',
        ],
        secondary: [
            '#DCDDEC',
            '#D2D4E7',
            '#C6C8E1',
            '#ACAFD3',
            '#7F83B8',
            '#646AAD',
            '#4C518F',
            '#393D6B',
            '#0C1f56',
            '#06102B',
        ],
        success: [
            '#ECFDF5',
            '#D1FAE5',
            '#A7F3D0',
            '#6EE7B7',
            '#34D399',
            '#10B981',
            '#059669',
            '#047857',
            '#065F46',
            '#064E3B',
        ],
        warning: [
            '#FFFBEB',
            '#FEF3C7',
            '#FDE68A',
            '#FCD34D',
            '#FBBF24',
            '#F59E0B',
            '#D97706',
            '#B45309',
            '#92400E',
            '#78350F',
        ],
        error: [
            '#FEF2F2',
            '#FEE2E2',
            '#FECACA',
            '#FCA5A5',
            '#F87171',
            '#EF4444',
            '#DC2626',
            '#B91C1C',
            '#991B1B',
            '#7F1D1D',
        ],
        neutral: [
            '#FBFBFC',
            '#EEEFF2',
            '#DADBE2',
            '#CBD5E1',
            '#8D90A7',
            '#6F728F',
            '#454966',
            '#383A4B',
            '#313038',
            '#21222C',
        ],
        shades: ['#FFFFFF', '#000000'],
    },
};
