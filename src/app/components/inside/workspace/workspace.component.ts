import { Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  catches: any[] = [];
  user = this.auth.currentUser;

  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.catches = await this.dataService.getCatches();
    console.log('this.boards: ', this.catches);
  }

  signOut() {
    this.auth.logout();
  }
}
