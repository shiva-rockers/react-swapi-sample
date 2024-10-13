import { Badge, Card, Grid, Group, Title, Text } from '@mantine/core';
import { Resource } from '../../domain/entities/Resource';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/path';
import { LABELS } from '../../constants/labels';

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <Grid.Col key={resource.id} xs={12} sm={6} md={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Title order={3} size="h5" mb="xs">
                    <Link to={`${PATHS.RESOURCE_DETAIL(resource.id)}`}>
                        {resource.name}
                    </Link>
                </Title>
                <Text size="sm" color="dimmed" mb="xs">
                    {resource.description}
                </Text>

                <Group position="apart" mt="sm" spacing="xs">
                    <Badge color="blue" variant="outline">
                        {LABELS.GENDER_PREFIX} {resource.gender}
                    </Badge>
                    <Badge color="teal" variant="light">
                        {LABELS.HEIGHT_PREFIX} {resource.height}{' '}
                        {LABELS.HEIGHT_UNIT}
                    </Badge>
                </Group>
            </Card>
        </Grid.Col>
    );
};

export default ResourceCard;
