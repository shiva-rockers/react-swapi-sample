import { ResourceRepository } from '../../domain/repositories/ResourceRepository';
import { Resource } from '../../domain/entities/Resource';

export class GetAllResources {
  constructor(private repository: ResourceRepository) {}

  async execute(): Promise<Resource[]> {
    return await this.repository.getAllResources();
  }
}
