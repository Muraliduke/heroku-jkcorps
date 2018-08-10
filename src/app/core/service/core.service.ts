
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoreService {

  constructor(private http:HttpClient) {}
 
  getStudents() {
      return this.http.get('/api/admin/students');
  }

  addStudents(studentData) {
    return this.http.post('/api/admin/student',studentData);
  }

}
