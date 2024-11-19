import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from './models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl = 'http://localhost:8080/api/contratos'; // Cambia la URL si tu backend está en otro lugar

  constructor(private http: HttpClient) { }

  // Obtener todos los contratos
  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl);
  }

  // Obtener un contrato por ID
  getContratoPorId(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo contrato
  crearContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiUrl, contrato);
  }

  // Actualizar un contrato existente
  actualizarContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/${id}`, contrato);
  }

  // Eliminar un contrato por ID
  eliminarContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
