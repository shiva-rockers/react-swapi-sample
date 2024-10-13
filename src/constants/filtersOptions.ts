export const FILTER_OPTIONS: filterOptions = {
    MALE: 'Male',
    FEMALE: 'Female',
    TALL: 'Tall (>170 cm)',
    SHORT: 'Short (>170 cm)',
    HEIGHT_THRESHOLD: 170,
};

interface filterOptions {
    MALE: string;
    FEMALE: string;
    TALL: string;
    SHORT: string;
    HEIGHT_THRESHOLD: number;
}
