import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Persona: Persona[] | undefined;

  constructor(private http: HttpClient) { }
  
  Url = "https://prueba-ejemplo01.herokuapp.com/personas";
  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  
  createPersona(persona: Persona){
    return this.http.post<Persona>(this.Url, persona);
  }

  GetPersona(id: number) {
    return this.http.get<Persona>(this.Url + "/" + id);
  }

  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + "/" + persona.id, persona);
  }

  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.Url + "/" + persona.id);
  }
}
