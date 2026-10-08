import {LocalApiClient} from "../../shared/api-client"; import {LocalRepository} from "../../shared/repository";
export const api=new LocalApiClient(new LocalRepository());
export const featureModules=["patients", "appointments", "records"] as const;
export const role="user" as const;

