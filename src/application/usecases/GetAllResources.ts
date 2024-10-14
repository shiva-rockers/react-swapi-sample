import { Resource } from '../../domain/entities/Resource';
import { ResourceRepository } from '../../domain/repositories/ResourceRepository';

export class GetAllResources {
    constructor(private repository: ResourceRepository) {}

    async execute(): Promise<Resource[]> {
        return await this.repository.getAllResources();
    }
}
