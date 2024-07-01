// src/app/pantallas/usuarios/usuario.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../shared/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../../shared/modelo/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  title = 'Nacho';
  usuarios: Usuario[] = [];
  selectedUser: Usuario | null = null;
  isEditing: boolean = false;
  private usuariosSubscription: Subscription | undefined;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usuariosSubscription = this.usuarioService.getUsuarios().subscribe(
      usuariosObs => {
        console.log(usuariosObs);
        this.usuarios = usuariosObs;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.usuariosSubscription) {
      this.usuariosSubscription.unsubscribe();
    }
  }

  editUser(user: Usuario): void {
    this.selectedUser = { ...user };
    this.isEditing = true;
  }

  closeForm(): void {
    this.isEditing = false;
    this.selectedUser = null;
  }

  saveUser(): void {
    if (this.selectedUser) {
      this.usuarioService.updateUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.closeForm();
      });
    }
  }

  trackByUsuario(index: number, usuario: Usuario): number {
    return usuario.id;
  }
}
