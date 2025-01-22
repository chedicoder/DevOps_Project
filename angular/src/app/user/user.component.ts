import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private service: UserService,private formBuilder: FormBuilder, private router: Router) {}
  users: any[] = [];
  form!:FormGroup
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.getUsers();
  }
  getUsers(){
    this.service.getData().subscribe({
      next :(response) => {
        this.users =  response; // Affecter la liste recu au variable users
       },
       error:(error) => {
         console.log(error);
       }}
     );
  }
  addUser(): void {
    this.service.postData(this.form.value).subscribe({
      next: (response) => {
        this.getUsers();  // Rafraichir la liste des users après l'ajout 
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/user']);
        });
        },
      error: (error) => {
        console.log(error);
      }
    });
  }
  deleteUser(id:any){
    this.service.DeleteData(id).subscribe({
      next: (response) => {
        this.getUsers();  // Rafraichir la liste des users après la suppression
      },
      error: (error) => {
        console.log(error);
      }
    });
      }
}
