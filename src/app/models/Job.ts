import { Compensation } from "./Compensation";
import { Organization } from "./Organization";
import { Skill } from "./Skill";

export interface Job{
    id:string;
    objective:string;
    type:string;
    organizations:Organization[];
    compensation:Compensation;
    skills:Skill;
}