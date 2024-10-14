import { Card, Container, Text, Title, Badge, Group, List, Alert, Divider } from '@mantine/core';
import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useResourceStore } from '../../application/stores/resourceStore';
import { LABELS } from '../../constants/labels';
import LoaderCard from '../components/LoaderCard';

const ResourceDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { resourceDetail, fetchResourceById, fetchResourceEnrichment, error, loading, loadingResourceEnrichment } = useResourceStore();

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                await Promise.all([fetchResourceById(id), fetchResourceEnrichment(id)]);
            };
            fetchData();
        }
    }, [id, fetchResourceById, fetchResourceEnrichment]);

    if (loading) return <LoaderCard />;
    if (!resourceDetail && !error) return <Text align="center">No data available for this resource.</Text>;

    return (
        <Container size="md" my="lg">
            {error && (
                <Alert title="Error" color="red" mb="md">
                    {error}
                </Alert>
            )}
            {resourceDetail && (
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <ResourceTitleSection name={resourceDetail.name} gender={resourceDetail.gender} birth_year={resourceDetail.birth_year} />
                    <Divider my="sm" />
                    <ResourceAdditionalInfo height={resourceDetail.height} mass={resourceDetail.mass} homeworld={resourceDetail.homeworld} />
                    <Divider my="sm" />
                    <ResourceRelatedFilms loading={loadingResourceEnrichment} films={resourceDetail.relatedFilms || []} />
                </Card>
            )}
        </Container>
    );
};

const ResourceTitleSection = React.memo(({ name, gender, birth_year }: { name: string; gender: string; birth_year: string }) => (
    <>
        <Title order={2} align="center" mb="md">
            {name}
        </Title>
        <Group position="center" mb="md">
            <Badge color="teal" variant="filled">
                Gender: {gender}
            </Badge>
            <Badge color="blue" variant="filled">
                Birth Year: {birth_year}
            </Badge>
        </Group>
    </>
));
ResourceTitleSection.displayName = 'ResourceTitleSection';

const ResourceAdditionalInfo = React.memo(({ height, mass, homeworld }: { height: string; mass: string; homeworld: string }) => (
    <>
        <Title order={3} mt="md">
            Character Details
        </Title>
        <Group spacing="md" mt="xs" mb="md">
            <Text>
                {LABELS.HEIGHT_PREFIX}
                <strong>
                    {height} {LABELS.HEIGHT_UNIT}
                </strong>
            </Text>
            <Text>
                {LABELS.MASS_PREFIX}
                <strong>
                    {mass} {LABELS.MASS_UNIT}
                </strong>
            </Text>

            <Text>
                {LABELS.HOME_WORLD_PREFIX}
                <Link to={homeworld} target="_blank">
                    <strong>{homeworld}</strong>
                </Link>
            </Text>
        </Group>
    </>
));
ResourceAdditionalInfo.displayName = 'ResourceAdditionalInfo';

const ResourceRelatedFilms = React.memo(({ films, loading }: { films: string[]; loading: boolean }) => {
    const filmItems = useMemo(() => {
        return films.map((film) => <List.Item key={film}>{film}</List.Item>);
    }, [films]);

    if (loading) return <LoaderCard />;
    if (!films.length) return <Text align="center">No data available for this resource.</Text>;
    return (
        <>
            <Title order={3} mt="md">
                {LABELS.RELATED_FILMS}
            </Title>
            <List withPadding mt="xs">
                {filmItems}
            </List>
        </>
    );
});

ResourceRelatedFilms.displayName = 'ResourceRelatedFilms';

export default ResourceDetailPage;
