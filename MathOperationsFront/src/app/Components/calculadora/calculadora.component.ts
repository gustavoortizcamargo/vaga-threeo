import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CalculadoraService } from '../../Services/calculadora.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule




@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, 
    FormsModule,  
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    HttpClientModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],  
})


export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  mostrarResultado = false;

  constructor(private calculadoraService: CalculadoraService) { }

  calcular(operacao: number): void {
    const observer = {
      next: (response: any) => {
        this.resultado = response.result;
        this.mostrarResultado = true;
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    };
  
    this.calculadoraService.calcular(this.valor1, this.valor2, operacao)
      .subscribe(observer); 
  }
}