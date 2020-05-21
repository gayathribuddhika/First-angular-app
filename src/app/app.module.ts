import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule  } from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { DepartmentService } from 'src/app/services/department.service'
import { EmployeeService } from 'src/app/services/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatSliderModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
