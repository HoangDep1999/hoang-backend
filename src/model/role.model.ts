export class Role{
    id?:number;
    type?:string;

    constructor(id?:number, type?:string){
        if(id !== undefined) this.id = id;
        if(type !== undefined) this.type = type;
    }
}