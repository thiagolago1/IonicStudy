import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs = {
    isSignIn: true,
    actions: 'Login',
    actionChange: 'Create Account'
  };
  private nameControl = new FormControl(' ', [Validators.required, Validators.minLength(3)]);

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

  get name(): FormControl {
    return <FormControl>this.authForm.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get pasasword(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.actions = isSignIn ? 'Login' : 'Sign Up;';
    this.configs.actionChange = isSignIn ? 'Create Account' : 'Already have an account';
    isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
