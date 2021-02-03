import { CompensationDetails } from "./Compensation";
import { Organization } from "./Organization";
import { Skill } from "./Skill";

export interface JobDetails{
    code:string;
    content:string;
}
export interface PlaceDetails{
    remote:boolean;
    anywhere:boolean;
    timezone:boolean;
}


export interface JobDetailModel{
    id:string;
    objective:string;
    details:JobDetails[];
    place:PlaceDetails;
    strengths:Skill[];
    organizations:Organization[];
    compensation:CompensationDetails
}