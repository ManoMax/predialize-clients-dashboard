import {Enterprise} from "../enterprise/enterprise.model";

export interface Client {
    _id?: string
    name: string
    image_src: string
    enterprises?: Enterprise[]
}