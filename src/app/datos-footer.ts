export interface DatosFooter {
    imprimir(): void;
}

export class footer implements DatosFooter{
    constructor(private autor: string, private version: string, private fecha: string){ };
    imprimir(){
        return `Autor: ${this.autor}, Version: ${this.version}, Fecha: ${this.fecha}`;
    }
}
