import { Injectable } from '@angular/core';
import { IDoctor } from './../curewell-interfaces/doctor';
import { ISurgery } from './../curewell-interfaces/surgery';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CurewellService {

  doctorList: IDoctor[];
  surgeryList: ISurgery[];

  //Do not modify
  constructor(private http: HttpClient) { }
  

  //Do not modify signature
  getDoctors(): Observable<IDoctor[]> {
    //To do implement necessary logic
    let tempVar = this.http.get<IDoctor[]>('http://localhost:60688/api/CureWell/FetchAllDoctors').pipe(catchError(this.errorHandler));
    return tempVar;
  }


  //Do not modify signature
  getAllSurgeriesDetails(): <ISurgery[]> {
    //To do implement necessary logic
    //let tempVar = this.http.get<ISurgery[]>('http://localhost:60688/api/CureWell/FetchAllSurgeryDetails').pipe(catchError(this.errorHandler));
    surgeryList = [{"surgeryId": 1, "doctorId": "D1001", "surgeryCategory": "Arsen", "startTime": "12:00", "endTime": "17:00", "surgeryDate": new Date() }]
    return surgeryList;
    
  }


  //Do not modify signature
  editSurgery(surgeryObj: ISurgery): Observable<boolean> {
    //To do implement necessary logic
    return null;
  }


  //Do not modify signature
  errorHandler(error: HttpErrorResponse) {
    //To do implement necessary logic
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
