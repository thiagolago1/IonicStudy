import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  private createForm(): void {
    // Validação para o formulário de login, verificando email e caracters mínimos para password
    this.authForm = this.fb.group({
      email: [' ', [Validators.required, Validators.email]],
      password: [' ', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get pasasword(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
