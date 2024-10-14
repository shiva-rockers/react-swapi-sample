import { useEffect, useMemo, useState } from 'react';
import { useResourceStore } from '../../application/stores/resourceStore';
import { Container, Grid, Pagination, Title, Alert } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import FilterGroup from '../components/FilterGroup';
import ResourceCard from '../components/ResourceCard';
import LoaderCard from '../components/LoaderCard';
import { LABELS } from '../../constants/labels';
import { COMMON_CONSTANTS } from '../../constants/common';
import { FILTER_OPTIONS } from '../../constants/filtersOptions';
import { SORT_OPTIONS } from '../../constants/sortOptions';

const RESOURCE_PER_PAGE = 15;

const ResourceListPage = () => {
    const { resources, fetchResources, error, loading } = useResourceStore();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredResources, setFilteredResources] = useState(resources);
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get(COMMON_CONSTANTS.PAGE_PARAM)) || 1);

    const searchQuery = searchParams.get(COMMON_CONSTANTS.SEARCH_PARAM) || '';
    const filterQuery = searchParams.get(COMMON_CONSTANTS.FILTER_PARAM) || '';
    const sortQuery = searchParams.get(COMMON_CONSTANTS.SORT_PARAM) || '';

    const [search, setSearch] = useState(searchQuery);
    const [filter, setFilter] = useState<string | null>(filterQuery);
    const [sort, setSort] = useState<string | null>(sortQuery);

    useEffect(() => {
        fetchResources();
    }, [fetchResources]);

    useEffect(() => {
        let filtered = resources;

        if (filter) {
            filtered = filtered.filter((resource) => {
                switch (filter) {
                    case FILTER_OPTIONS.MALE:
                    case FILTER_OPTIONS.FEMALE:
                        return resource.gender === filter.toLowerCase();
                    case FILTER_OPTIONS.TALL:
                        return parseInt(resource.height) > FILTER_OPTIONS.HEIGHT_THRESHOLD;
                    case FILTER_OPTIONS.SHORT:
                        return parseInt(resource.height) <= FILTER_OPTIONS.HEIGHT_THRESHOLD;
                    default:
                        return true;
                }
            });
        }

        if (search) {
            filtered = filtered.filter((resource) => resource.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (sort) {
            filtered = filtered.sort((a, b) => {
                switch (sort) {
                    case SORT_OPTIONS.ALPHABETICAL:
                        return a.name.localeCompare(b.name);
                    case SORT_OPTIONS.HEIGHT_SHORT_TO_TALL:
                        return parseInt(a.height) - parseInt(b.height);
                    case SORT_OPTIONS.HEIGHT_TALL_TO_SHORT:
                        return parseInt(b.height) - parseInt(a.height);
                    default:
                        return 0;
                }
            });
        }

        setFilteredResources(filtered);
    }, [resources, search, filter, sort]);

    const memoizedResources = useMemo(() => filteredResources, [filteredResources]);

    const updateSearchParams = (params: Record<string, string | undefined>) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    newParams.set(key, value);
                } else {
                    newParams.delete(key);
                }
            });
            return newParams;
        });
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        updateSearchParams({
            search: value,
            page: '1',
        });
    };

    const handleFilterChange = (value: string) => {
        setFilter(value);
        updateSearchParams({
            filter: value,
            page: '1',
        });
    };

    const handleSortChange = (value: string) => {
        setSort(value);
        updateSearchParams({
            sort: value,
            page: '1',
        });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateSearchParams({
            page: page.toString(),
        });
    };

    const handleClearSearch = () => {
        setSearch('');
        setSearchParams({});
    };

    const handleClearFilter = () => {
        setFilter(null);
    };

    const handleClearSort = () => {
        setSort(null);
    };

    const handleClearFilters = () => {
        handleClearSearch();
        handleClearFilter();
        handleClearSort();
        setCurrentPage(1);
    };

    return (
        <Container size="lg" my="lg">
            <Title order={2} align="center" mb="md">
                {LABELS.RESOURCE_LIST_TITLE}
            </Title>
            {error && (
                <Alert title="Error" color="red" mb="md">
                    {' '}
                    {error}{' '}
                </Alert>
            )}

            {loading ? (
                <LoaderCard />
            ) : (
                <>
                    <FilterGroup
                        search={search}
                        filter={filter}
                        sort={sort}
                        handleSearchChange={handleSearchChange}
                        handleFilterChange={handleFilterChange}
                        handleSortChange={handleSortChange}
                        handleClearSearch={handleClearSearch}
                        handleClearFilter={handleClearFilter}
                        handleClearSort={handleClearSort}
                        handleClearFilters={handleClearFilters}
                    />
                    <Grid gutter="lg">
                        {memoizedResources.slice((currentPage - 1) * RESOURCE_PER_PAGE, currentPage * RESOURCE_PER_PAGE).map((resource) => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))}
                    </Grid>
                    <Pagination
                        total={Math.ceil(memoizedResources.length / RESOURCE_PER_PAGE)}
                        onChange={handlePageChange}
                        size="lg"
                        mt="lg"
                        position="center"
                    />
                </>
            )}
        </Container>
    );
};

export default ResourceListPage;
