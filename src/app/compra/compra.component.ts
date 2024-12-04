import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../models/categoria.model';
import { Producto } from '../models/producto.model';
import { CarritoComponent } from '../carrito/carrito.component';
import { TarjetaComponent } from "../common/tarjeta/tarjeta.component";

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, FormsModule, TarjetaComponent, CarritoComponent],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  carrito: any[] = [];
  categoriaSeleccionada: Categoria | null = null;
  busqueda: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.fetchCategorias();
    this.fetchProductos();
  }

  fetchCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  fetchProductos(): void {
    this.productoService.getProductos().subscribe((productos) => {
      this.productos = productos;
      this.productosFiltrados = productos; // Mostrar todos los productos al inicio
    });
  }

  mostrarProductosPorCategoria(categoria: Categoria): void {
    this.categoriaSeleccionada = categoria;
    this.actualizarFiltro();
  }

  filtrarProductos(): void {
    this.actualizarFiltro();
  }

  actualizarFiltro(): void {
    this.productosFiltrados = this.productos.filter((producto) => {
      // Filtrar productos por categoría seleccionada
      const perteneceCategoria = this.categoriaSeleccionada
        ? producto.categoria._id === this.categoriaSeleccionada._id // Compara los _id de las categorías
        : true; // Si no hay categoría seleccionada, mostrar todos los productos
  
      // Filtrar productos por búsqueda
      const coincideBusqueda = this.busqueda
        ? producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        : true;
  
      return perteneceCategoria && coincideBusqueda;
    });
  }  

  agregarAlCarrito(producto: Producto): void {
    const productoExistente = this.carrito.find(
      (item) => item.id === producto._id 
    );
    if (productoExistente) {
      // Si ya existe en el carrito, incrementar cantidad
      productoExistente.cantidad++;
    } else {
      // Si no existe, agregarlo con cantidad inicial
      this.carrito.push({ ...producto, id: producto._id, cantidad: 1 });
    }
  }

  getCantidadEnCarrito(productoId: number) {
    const productoEnCarrito = this.carrito.find((item) => item.id === productoId);
    return productoEnCarrito ? productoEnCarrito.cantidad : 0;
  }

  incrementarCantidad(productoId: number): void {
    const producto = this.carrito.find(item => item.id === productoId);
    if (producto) {
      producto.cantidad++;
    }
  }

  decrementarCantidad(productoId: number): void {
    const producto = this.carrito.find(item => item.id === productoId);
    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminarDelCarrito(productoId: number): void {
    this.carrito = this.carrito.filter(item => item.id !== productoId);
  }
 
}
