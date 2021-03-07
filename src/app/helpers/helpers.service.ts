import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  public ajustaDadosPaciente(obj: FormGroup): FormGroup {
    const nome = this.formataNome(obj.controls.nome.value);
    const email = this.formataEmail(obj.controls.email.value);
    obj.patchValue({ nome });
    obj.patchValue({ email });
    return obj;
  }

  public formataNome(text: string): string {
    let words = text.toLowerCase().split(" ");
    for (let a = 0; a < words.length; a++) {
      let w = words[a];
      words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
  }

  public formataEmail(email: string): string {
    return email.toLowerCase();
  }



}
