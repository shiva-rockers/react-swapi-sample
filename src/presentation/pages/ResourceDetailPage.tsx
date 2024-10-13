import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useResourceStore } from '../../application/stores/resourceStore';
import {
    Card,
    Container,
    Text,
    Title,
    Badge,
    Group,
    List,
    Alert,
    Divider,
} from '@mantine/core';
import LoaderCard from '../components/LoaderCard';
import { LABELS } from '../../constants/labels';

const ResourceDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const {
        resourceDetail,
        fetchResourceById,
        fetchResourceEnrichment,
        error,
        loading,
        loadingResourceEnrichment,
    } = useResourceStore();

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;
            fetchResourceById(id);
            fetchResourceEnrichment(id);
        };
        fetchData();
    }, [id, fetchResourceById, fetchResourceEnrichment]);

    const memoizedResourceDetail = useMemo(
        () => resourceDetail,
        [resourceDetail]
    );

    if (loading) return <LoaderCard />;
    if (!resourceDetail && !error)
        return <Text align="center">No data available for this resource.</Text>;

    return (
        <Container size="md" my="lg">
            {error && (
                <Alert title="Error" color="red" mb="md">
                    {error}
                </Alert>
            )}
            {memoizedResourceDetail && (
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <ResourceTitleSection
                        name={memoizedResourceDetail.name}
                        gender={memoizedResourceDetail.gender}
                        birth_year={memoizedResourceDetail.birth_year}
                    />
                    <Divider my="sm" />
                    <ResourceAdditionalInfo
                        height={memoizedResourceDetail.height}
                        mass={memoizedResourceDetail.mass}
                        homeworld={memoizedResourceDetail.homeworld}
                    />
                    <Divider my="sm" />
                    <ResourceRelatedFilms
                        loading={loadingResourceEnrichment}
                        films={memoizedResourceDetail.relatedFilms || []}
                    />
                </Card>
            )}
        </Container>
    );
};

const ResourceTitleSection = ({
    name,
    gender,
    birth_year,
}: {
    name: string;
    gender: string;
    birth_year: string;
}) => (
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
);

const ResourceAdditionalInfo = ({
    height,
    mass,
    homeworld,
}: {
    height: string;
    mass: string;
    homeworld: string;
}) => (
    <>
        <Title order={3} mt="md">
            Character Details
        </Title>
        <Group spacing="md" mt="xs" mb="md">
            <Text>
                {LABELS.HEIGHT_PREFIX}{' '}
                <strong>
                    {height} {LABELS.HEIGHT_UNIT}
                </strong>
            </Text>
            <Text>
                {LABELS.MASS_PREFIX}{' '}
                <strong>
                    {mass} {LABELS.MASS_UNIT}
                </strong>
            </Text>
            <Text>
                {LABELS.HOME_WORLD_PREFIX} <strong>{homeworld}</strong>
            </Text>
        </Group>
    </>
);

const ResourceRelatedFilms = ({
    films,
    loading,
}: {
    films: string[];
    loading: boolean;
}) => {
    if (loading) return <LoaderCard />;
    if (!films.length)
        return <Text align="center">No data available for this resource.</Text>;
    return (
        <>
            <Title order={3} mt="md">
                {LABELS.RELATED_FILMS}
            </Title>
            <List withPadding mt="xs">
                {films.map((film) => (
                    <List.Item key={film}>{film}</List.Item>
                ))}
            </List>
        </>
    );
};

export default ResourceDetailPage;
