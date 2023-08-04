import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//https://www.concretepage.com/angular-material/angular-material-select-getting-setting-value
//there are 4 ways to get selected item:
//1 [(value)]
//2 [(ngModel)]
//3 formControlName
//4 selectionChange($event)
@Component({
  selector: 'app-jack-select',
  templateUrl: './jack-select.component.html',
  styleUrls: ['./jack-select.component.scss']
})
export class JackSelectComponent implements OnInit {
  selectedGame = "Football";
  selectedGame2 = "Football";
  selectedGame3 = "Football";

  profiles = [
    { id: 'dev', name: 'Developer' },
    { id: 'man', name: 'Manager' },
    { id: 'dir', name: 'Director' }
  ];
  selectedProfile = this.profiles[1];

  allProfiles = [
    { id: 1, name: "name-jack" },
    { id: 2, name: "name-job" },
    { id: 3, name: "name-john" },
  ];
  empForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      profile: [this.allProfiles[1].id],
    });
  }

}
