import { Level } from "./level.enum";

export class Task{
    name= "";
    descripcion= "";
    completado = false;
    nivel=Level.normal;

    constructor(name, description, completed, level){
        this.name=name;
        this.descripcion=description;
        this.completado=completed;
        this.nivel=level;
    }
}