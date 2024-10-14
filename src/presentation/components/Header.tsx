import { Button, Group, Title, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

import { LABELS } from '../../constants/labels';
import { PATHS } from '../../constants/path';

const Header = ({ handleLogout }: { handleLogout: () => void }) => {
    return (
        <Container size="lg" py="md">
            <Group position="apart">
                <Link to={PATHS.RESOURCE_LIST} className="link title">
                    <Title order={3}>{LABELS.APP_TITLE}</Title>
                </Link>
                <Button variant="subtle" color="red" onClick={handleLogout}>
                    {LABELS.LOGOUT}
                </Button>
            </Group>
        </Container>
    );
};

export default Header;
