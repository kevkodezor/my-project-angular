import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { ValidatorPayReq } from '../interfaces/requests/ValidatorRequest';

@Component({
    selector: 'validator-pay',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './validator-pay.component.html',
})

export class ValidatorPay {
    // form = signal<FormGroup>(
    //     new FormGroup({
    //         date: new FormControl('', [Validators.required]),
    //         bank: new FormControl('', [Validators.required]),
    //         code: new FormControl('', [Validators.required]),
    //         phone: new FormControl(0, [Validators.required, Validators.maxLength(7)]),
    //         amount: new FormControl(0, [Validators.required, Validators.minLength(1)])
    //     })
    // );

    private service = inject(RegisterService);
    private router = inject(Router);
    public formBuild = inject(FormBuilder);

    public formRegister: FormGroup = this.formBuild.group({
        date: new FormControl('', [Validators.required]),
        bank: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        phone: new FormControl(0, [Validators.required, Validators.maxLength(7)]),
        amount: new FormControl(0, [Validators.required, Validators.minLength(1)])
    });

    validatePay () {
        if (this.formRegister.invalid) return;

        const object:ValidatorPayReq = {
            date: this.formRegister.value.date,
            bank: this.formRegister.value.bank,
            code: this.formRegister.value.code,
            phone: this.formRegister.value.phone,
            amount: this.formRegister.value.amount,
        }

        this.service.validatorPayment(object).subscribe({
            next: (data) => {
                // if (data.success)
                console.log(data);
                
            }, error: (error) => {
                console.log(error.message);
                
            }
        });
    }

}