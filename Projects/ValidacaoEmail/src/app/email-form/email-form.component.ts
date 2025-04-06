import { Component } from '@angular/core'; //components Angular
import { HttpClient } from '@angular/common/http'; //make request HTTP for API
import { FormBuilder, Validators } from '@angular/forms'; //create e validation forms

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  
  //created Form reativo. Email field begin empty, is required and field validation in format email. 
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  //#region Variables
  emailValid: boolean | null = null;
  loading = false;
  //#endregion Variables

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  //function lost focus of the field
  onEmailBlur() {
    const email = this.emailForm.get('email')?.value; //value current of field email
    
    //If field estiver invalid don't call of API
    if(!email || this.emailForm.get('email')?.invalid){
      this.emailValid = null
      return;
    }

    this.loading = true;
    const apiKey = 'API_KEYS'
    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;

    //Check when API response with success
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.emailValid = res.is_valid_format.value; //Check correct format of field
        this.loading = false;
      },
      //If ocorrer error request, return invalid field
      error: () => {
        this.emailValid = false;
        this.loading = false;
      }
    })
  }

}
