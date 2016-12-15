import {Component} from 'angular2/core'
import {ServiceTicket} from '../ServiceTicket'
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common';
// Our service ticket component 
@Component({
    selector: 'service-desk-ticket-form.component.ts',
    templateUrl: 'service-desk-ticket-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
 
})

export /**
 * NewRequestForm
 */
class NewRequestForm {
    constructor(){
        console.log("Form Component Start");
    }
    
    submitted = false; //form not submitted : default
    data: string; //this variable contains our data

    onSubmit(data: string) {
        this.submitted = true;
        this.data = JSON.stringify(data, null, 2);
        console.log(this.data);
    }
}