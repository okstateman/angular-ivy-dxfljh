import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CurewellService } from '../../curewell-services/curewell.service';
import { ISurgery } from '../../curewell-interfaces/surgery';


@Component({
  templateUrl: './update-surgery.component.html'
})
export class UpdateSurgeryComponent implements OnInit {
  @ViewChild(NgForm) ngForm: NgForm;

  surgeryId: number;
  doctorId: string;
  surgeryDate: Date;
  startTime: string;
  endTime: string;
  surgeryCategory: string;
  status: boolean;
  errorMsg: string;
  surgeryObj: ISurgery

  //Do not modify
  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }

  //Do not modify signature
  ngOnInit() {
  //To do implement necessary logic
  this.surgeryId = this.route.snapshot.params['surgeryId'];
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.surgeryDate = this.route.snapshot.params['surgeryDate'];
    this.startTime = this.route.snapshot.params['startTime'];
    this.endTime = this.route.snapshot.params['endTime'];
    this.surgeryCategory = this.route.snapshot.params['surgeryCategory'];
    


  }

  //Do not modify signature
  editSurgery(form: NgForm) {
  //To do implement necessary logic
  this.surgeryObj.doctorId = form.value.doctorId;
    this.surgeryObj.surgeryId = this.surgeryId;
    this.surgeryObj.surgeryDate = form.value.surgeryDate;
    this.surgeryObj.startTime = form.value.startTime;
    this.surgeryObj.endTime = form.value.endTime;
    this.surgeryObj.surgeryCategory = form.value.surgeryCategory;
    
    this._cureWellService.editSurgery(this.surgeryObj).subscribe(
      responseStatus => {
        this.status = responseStatus;
        if(this.status){
          alert("Updated Successfully. ");
          this.router.navigate(['/viewSurgeryDetails']);
        }
        else{
          alert("Some error occured. Please try again")
        }
      },
      responseRegUserError => {
        this.errorMsg = responseRegUserError;
        console.log(this.errorMsg);
        alert("Some error occured, please try after");
        this.router.navigate(['/viewDoctors']);
      },
      () => console.log("RegisterUser method executed successfully.")
    );
  }
}