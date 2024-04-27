import { CanMatch, Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {

  catches$: BehaviorSubject<any> = new BehaviorSubject([]);
  user = this.auth.currentUser;

  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  async ngOnInit() {
    let response = await this.dataService.supabase.from('catches').select('*');
    console.log(response);
    this.catches$.next(response.data);
  }


  createCatch() {

  }

  signOut() {
    this.auth.logout();
  }
}
