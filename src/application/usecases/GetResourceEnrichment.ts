import { ResourceRepository } from '../../domain/repositories/ResourceRepository';
import { Resource } from '../../domain/entities/Resource';

export class GetResourceEnrichment {
  constructor(private repository: ResourceRepository) {}

  async execute(id: string): Promise<Partial<Resource>> {
    return await this.repository.getResourceEnrichment(id);
  }
}
