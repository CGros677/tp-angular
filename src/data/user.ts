
import {FormGroup} from '@angular/forms';

export class AmbForm extends FormGroup {
}


export class User {
    firstName: string;
    lastName: string;
    dob: string;
    phone: string;
    email: string;
    checkBox: boolean;
    profileComplete: boolean;
    password?: string;
    confirmPassword?: string;

    constructor(
        theFirstName: string,
        theLastName: string,
        theDob: string,
        thePhone: string,
        theEmail: string,
        theCheckBox: boolean,
        theProfileComplete: boolean,
        thePassword?: string,
        theConfirmPassword?: string,
    ) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
        this.dob = theDob;
        this.phone = thePhone;
        this.email = theEmail;
        this.checkBox = theCheckBox;
        this.profileComplete = theProfileComplete;
        this.password = thePassword;
        this.confirmPassword = theConfirmPassword;

    }
}



