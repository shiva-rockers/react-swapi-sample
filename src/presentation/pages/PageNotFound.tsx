import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Container size="md" style={{ textAlign: 'center', marginTop: '10%' }}>
            <Title order={1} style={{ fontSize: '3rem', fontWeight: 700 }}>
                404
            </Title>
            <br />
            <Title order={1} style={{ fontSize: '2rem', fontWeight: 700 }}>
                You have found a secret place.
            </Title>
            <br />
            <Text c="dimmed" size="lg" ta="center">
                Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.
            </Text>
            <Group position="center" mt="lg">
                <Button variant="subtle" size="md" component={Link} to="/">
                    Take me back to home page
                </Button>
            </Group>
        </Container>
    );
};

export default PageNotFound;
