import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validaciones {
    static contrasenas(control: AbstractControl): ValidationErrors| null{
        
        let contrasena = control.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{9,}$/;
        if(!regex.test(contrasena)){
            return {contrasenas: true};
        } else {
            return null;
        }
    }
}
