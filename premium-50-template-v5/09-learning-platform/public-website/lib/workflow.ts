import {LocalApiClient} from "../../shared/api-client"; import {LocalRepository} from "../../shared/repository";
export const api=new LocalApiClient(new LocalRepository());
export const featureModules=["courses", "lessons", "quizzes", "progress"] as const;
export const role="user" as const;

