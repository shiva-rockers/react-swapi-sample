import { Button, Group, Select, TextInput } from '@mantine/core';
import { IconX, IconSearch } from '@tabler/icons-react';
import { LABELS } from '../../constants/labels';
import { FILTER_OPTIONS } from '../../constants/filtersOptions';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import { useRef } from 'react';

interface FilterGroupProps {
    search: string;
    filter: string | null;
    sort: string | null;
    handleSearchChange: (event: string) => void;
    handleFilterChange: (event: string) => void;
    handleSortChange: (event: string) => void;
    handleClearFilters: () => void;
    handleClearSearch: () => void;
    handleClearFilter: () => void;
    handleClearSort: () => void;
}

const FilterGroup = (props: FilterGroupProps) => {
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        props.handleSearchChange(value);
    };

    return (
        <Group position="center" mb="lg" mt="sm" spacing="md">
            <TextInput
                placeholder={LABELS.SEARCH_PLACEHOLDER}
                value={props.search}
                onChange={handleSearchChange}
                size="md"
                rightSection={
                    props.search ? (
                        <IconX
                            onClick={props.handleClearSearch}
                            style={{ cursor: 'pointer' }}
                        />
                    ) : (
                        <IconSearch />
                    )
                }
                style={{ flex: 1, maxWidth: '300px' }}
            />
            <Select
                placeholder={LABELS.FILTER_PLACEHOLDER}
                data={Object.values(FILTER_OPTIONS)}
                value={props.filter}
                rightSection={
                    props.filter ? (
                        <IconX
                            onClick={props.handleClearFilter}
                            style={{ cursor: 'pointer' }}
                        />
                    ) : undefined
                }
                onChange={props.handleFilterChange}
                size="md"
            />
            <Select
                placeholder={LABELS.SORT_PLACEHOLDER}
                data={Object.values(SORT_OPTIONS)}
                value={props.sort}
                rightSection={
                    props.sort ? (
                        <IconX
                            onClick={props.handleClearSort}
                            style={{ cursor: 'pointer' }}
                        />
                    ) : undefined
                }
                onChange={props.handleSortChange}
                size="md"
            />
            <Button
                variant="outline"
                color="gray"
                onClick={props.handleClearFilters}
            >
                {LABELS.CLEAR_FILTER}
            </Button>
        </Group>
    );
};

export default FilterGroup;
