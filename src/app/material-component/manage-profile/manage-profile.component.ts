
import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { request } from 'http';
import { UserService } from 'src/app/services/user.service';
// import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  userName: string | undefined;
  userEmail: string | undefined;
  userMobile: number | undefined;
  // profilePictureUrl: string | undefined;
  // selectedFile: File | undefined;


  constructor(private userService:UserService) { }

  ngOnInit() {
    // Sample profile data
    var data=this.userService.getProfile().subscribe((data:any)=>{

    });
    console.log(data);
    
    this.userName = 'Abhishek Anand';
    this.userEmail = 'abc@example.com';
    this.userMobile= 7033510115;
  }
}

