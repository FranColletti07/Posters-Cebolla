import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: '2001: Odisea del espacio',
      descripcion: 'VHS original con la película completa y escenas eliminadas',
      precio: 19.99,
      precio_con_descuento: 14.99,
      imagen:  '/2001.jpg' ,   
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'El exorcista',
      descripcion: 'Versión digital en 4K de la película completa',
      precio: 7.99,
      precio_con_descuento: 4.99,
      imagen: '/El-exorcista.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Uzumaki',
      descripcion: 'Póster de Uzumaki plastificado de 50x50',
      precio: 19.99,
      precio_con_descuento: 14.99,
      imagen: 'Uzumaki.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'El rey león',
      descripcion: 'Póster 40x80cm plastificado',
      precio: 35.99,
      precio_con_descuento: 29.99,
      imagen: 'El-rey-leon.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Taxi Driver',
      descripcion: 'Disco de vinilo del Soundtrack oficial',
      precio: 39.99,
      precio_con_descuento: 34.99,
      imagen: 'Taxi-driver.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'The Northman',
      descripcion: 'Póster de 30x60cm plastificado',
      precio: 29.99,
      precio_con_descuento: 24.99,
      imagen: 'The-northman.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Memento',
      descripcion: 'Póster 40x80cm con marco',
      precio: 39.99,
      precio_con_descuento: 29.99,
      imagen: 'Memento.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'El padrino',
      descripcion: 'Póster de 70x100cm con cuadro',
      precio: 49.99,
      precio_con_descuento: 39.99,
      imagen: 'The-godfather.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
