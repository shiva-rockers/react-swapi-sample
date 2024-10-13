import axios from 'axios';
import { Resource } from '../../domain/entities/Resource';
import { ResourceRepository } from '../../domain/repositories/ResourceRepository';

const PEOPLE_PAGE_OFFSET = 6;

export class ResourceApi implements ResourceRepository {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = import.meta.env.VITE_SWAPI_BASE_URL || '';
    }

    async getAllResources(): Promise<Resource[]> {
        try {
            const requests = Array.from(
                { length: PEOPLE_PAGE_OFFSET },
                (_, index) =>
                    axios.get(`${this.baseUrl}/people?page=${index + 1}`)
            );
            const responses = await Promise.all(requests);
            const response = responses.flatMap(
                (response) => response.data.results
            );

            return response.map((item: any) => {
                const splittedUrl = item.url
                    .split('/')
                    .filter((str: string) => !!str);
                return {
                    id: splittedUrl[splittedUrl.length - 1],
                    name: item.name,
                    description: item.gender,
                    gender: item.gender,
                    birth_year: item.birth_year,
                    height: item.height,
                    mass: item.mass,
                    homeworld: item.homeworld,
                };
            });
        } catch (error) {
            console.error('Error fetching resources:', error);
            throw new Error(
                'Failed to fetch resources. Please try again later.'
            );
        }
    }

    async getResourceById(id: string): Promise<Resource> {
        try {
            const response = await axios.get(`${this.baseUrl}/people/${id}`);
            return {
                id: id,
                name: response.data.name,
                description: response.data.gender,
                gender: response.data.gender,
                birth_year: response.data.birth_year,
                height: response.data.height,
                mass: response.data.mass,
                homeworld: response.data.homeworld,
            };
        } catch (error) {
            console.error(`Error fetching resource ${id}:`, error);
            throw new Error(
                'Failed to fetch resource details. Please try again later.'
            );
        }
    }

    async getResourceEnrichment(id: string): Promise<Partial<Resource>> {
        try {
            const response = await axios.get(`${this.baseUrl}/people/${id}`);
            const films = await Promise.all(
                response.data.films.map((filmUrl: string) =>
                    axios.get(filmUrl).then((res) => res.data.title)
                )
            );
            return { relatedFilms: films };
        } catch (error) {
            console.error('Error fetching enrichment data:', error);
            throw new Error(
                'Failed to fetch enrichment data. Please try again later.'
            );
        }
    }
}
