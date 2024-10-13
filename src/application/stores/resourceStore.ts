// src/application/stores/resourceStore.ts
import { create } from 'zustand';
import { Resource } from '../../domain/entities/Resource';
import { GetAllResources } from '../usecases/GetAllResources';
import { GetResourceById } from '../usecases/GetResourceById';
import { GetResourceEnrichment } from '../usecases/GetResourceEnrichment';
import { ResourceApi } from '../../infrastructure/api/ResourceApi';

interface ResourceState {
    resources: Resource[];
    resourceDetail: Resource | null;
    error: string | null;
    loading: boolean;
    loadingResourceEnrichment: boolean;
    fetchResources: () => Promise<void>;
    fetchResourceById: (id: string) => Promise<void>;
    fetchResourceEnrichment: (id: string) => Promise<void>;
}

export const useResourceStore = create<ResourceState>((set) => ({
    resources: [],
    resourceDetail: null,
    error: null,
    loading: false,
    loadingResourceEnrichment: false,

    fetchResources: async () => {
        try {
            set({ loading: true })
            const getAllResources = new GetAllResources(new ResourceApi());
            const resources = await getAllResources.execute();
            set({ resources, error: null, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },
    fetchResourceById: async (id: string) => {
        try {
            set({ loading: true })
            const getResourceById = new GetResourceById(new ResourceApi());
            const resourceDetail = await getResourceById.execute(id);
            set({ resourceDetail, error: null, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },
    fetchResourceEnrichment: async (id: string) => {
        try {
            set({ loadingResourceEnrichment: true })
            const getResourceEnrichment = new GetResourceEnrichment(new ResourceApi());
            const enrichmentData = await getResourceEnrichment.execute(id);
            set((state) => ({
                resourceDetail: {
                    ...state.resourceDetail,
                    ...enrichmentData,
                } as Resource,
                error: null,
                loadingResourceEnrichment: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, loadingResourceEnrichment: false });
        }
    },
}));
