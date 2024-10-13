import { Group, Loader } from '@mantine/core';

const LoaderCard = () => {
    return (
        <Group position="center" mt="lg">
            {' '}
            <Loader size="lg" />{' '}
        </Group>
    );
};

export default LoaderCard;
