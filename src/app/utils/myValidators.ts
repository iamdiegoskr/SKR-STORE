import { AbstractControl,FormGroup } from "@angular/forms";

export class myValidators{

    /**
     * Metodo para validar si el precio de un producto es correcto
     * Si devuelve null es porque no encontro ningun error y el precio es correcto
     */
    static isPriceValid(control:AbstractControl){
        const value = control.value;
        if(value>100000){
            return {price_invalid:true}
        }else{
            return null
        }
    }



}