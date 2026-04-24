import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Opcional si usaras ngModel, pero por ahora manejaremos el evento directo

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  // REQUISITO TÉCNICO: Manejo de Evento Submit
  onSubmit(event: Event) {
    event.preventDefault(); // Evita el refresco de la página
    
    // Aquí podrías capturar los datos, por ahora lanzamos el feedback visual
    alert('🚀 ¡Solicitud enviada! Revisaremos tu perfil y te contactaremos para la Beta de Alvarez Games.');
    
    // Opcional: Limpiar el formulario
    (event.target as HTMLFormElement).reset();
  }
}