import { Badge, Card, Grid, Group, Title, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { LABELS } from '../../constants/labels';
import { PATHS } from '../../constants/path';
import { Resource } from '../../domain/entities/Resource';

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
    return (
        <Grid.Col key={resource.id} xs={12} sm={6} md={4}>
            <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                sx={{
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    },
                }}
                component={Link}
                to={`${PATHS.RESOURCE_DETAIL(resource.id)}`}
            >
                <Title order={3} size="h5" mb="xs">
                    {resource.name}
                </Title>
                <Text size="sm" color="dimmed" mb="xs">
                    {resource.description}
                </Text>

                <Group position="apart" mt="sm" spacing="xs">
                    <Badge color="blue" variant="outline">
                        {LABELS.GENDER_PREFIX} {resource.gender}
                    </Badge>
                    <Badge color="teal" variant="light">
                        {LABELS.HEIGHT_PREFIX} {resource.height} {LABELS.HEIGHT_UNIT}
                    </Badge>
                </Group>
            </Card>
        </Grid.Col>
    );
};

export default ResourceCard;
