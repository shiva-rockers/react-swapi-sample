import { ResourceRepository } from '../../domain/repositories/ResourceRepository';
import { Resource } from '../../domain/entities/Resource';

export class GetResourceById {
  constructor(private repository: ResourceRepository) {}

  async execute(id: string): Promise<Resource> {
    return await this.repository.getResourceById(id);
  }
}
