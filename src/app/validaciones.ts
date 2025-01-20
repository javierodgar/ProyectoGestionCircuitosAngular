import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validaciones {
    static contrasenasValidator(control: AbstractControl): ValidationErrors| null{
        
        let contrasena = control.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(contrasena) ? null : { contrasenaValidator: true };

    }
}
