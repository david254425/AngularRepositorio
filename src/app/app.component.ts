// src/app/app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductoComponent } from './pantallas/productos/producto.component';
import { UsuarioComponent } from './pantallas/usuarios/usuario.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from './pantallas/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ProductoComponent, UsuarioComponent, NavbarComponent, RouterLink, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregir a 'styleUrls' en plural
})
export class AppComponent { }



/*export class AppComponent implements OnInit{
  title = 'Nacho';
  lista : Cliente[] = [];
  public cliente: any=[];
  productos: any [] = [];
  usuarios: any[] = [];

  private readonly productoService = inject(ProductoService);
constructor( 
  private clienteService : ClienteService){
}

ngOnInit():void{
  this.lista = this.clienteService.getClientes();
  this.productoService.getProductos().subscribe(
    productosObs => {
    console.log(productosObs);
    this.productos = productosObs;

  });
}

agregarnombre(){
 // console.log(this.nombre);
this.clienteService.addCliente(this.cliente);
this.cliente ={};
 }
} */
