import { Resource } from '../entities/Resource';

export interface ResourceRepository {
    getAllResources(): Promise<Resource[]>;
    getResourceById(id: string): Promise<Resource>;
    getResourceEnrichment(id: string): Promise<Partial<Resource>>;
}
