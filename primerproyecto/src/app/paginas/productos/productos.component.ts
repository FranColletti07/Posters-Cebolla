import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: '2001: Odisea del espacio',
      descripcion: 'Póster de 30x60cm plastificado',
      precio: 29.99,
      precio_con_descuento: 29.99,
      imagen:  '/2001.jpg' ,   
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'El exorcista',
      descripcion: 'Póster de 40x80 cm plastificado',
      precio: 34.99,
      precio_con_descuento: 29.99,
      imagen: '/El-exorcista.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Uzumaki',
      descripcion: 'Póster de 30x60cm plastificado',
      precio: 29.99,
      precio_con_descuento: 29.99,
      imagen: 'Uzumaki.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Akira',
      descripcion: 'Póster de 100x230cm con marco',
      precio: 119.99,
      precio_con_descuento: 29.99,
      imagen: 'Akira.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Blade Runner 2049',
      descripcion: 'Sticker de 5x10cm',
      precio: 9.99,
      precio_con_descuento: 29.99,
      imagen: 'BLADERUNNER.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Taxi Driver',
      descripcion: 'Póster de 30x60cm plastificado',
      precio: 29.99,
      precio_con_descuento: 29.99,
      imagen: 'Taxi-driver.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'The Northman',
      descripcion: 'Póster de 30x60cm plastificado',
      precio: 29.99,
      precio_con_descuento: 29.99,
      imagen: 'The-northman.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'El rey león',
      descripcion: 'Póster 40x80cm plastificado',
      precio: 35.99,
      precio_con_descuento: 29.99,
      imagen: 'El-rey-leon.jpg', // Asegúrate de que esta ruta sea correcta
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
      precio_con_descuento: 29.99,
      imagen: 'The-godfather.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'Tron',
      descripcion: 'Póster de 60x90cm con cuadro',
      precio: 44.99,
      precio_con_descuento: 29.99,
      imagen: 'tron.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'Baymax',
      descripcion: 'Sticker',
      precio: 9.99,
      precio_con_descuento: 29.99,
      imagen: 'baymax.png', // Asegúrate de que esta ruta sea correcta
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
