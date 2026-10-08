import {LocalApiClient} from "../../shared/api-client"; import {LocalRepository} from "../../shared/repository";
export const api=new LocalApiClient(new LocalRepository());
export const featureModules=["contacts", "leads", "notes", "pipelines"] as const;
export const role="admin" as const;

