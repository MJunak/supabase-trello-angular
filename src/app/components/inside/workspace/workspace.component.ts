import { CanMatch, Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  catches$: Observable<any[]>;
  user = this.auth.currentUser;

  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.catches$ = this.dataService.supabase.from('catches').select('*').order('created_at', { ascending: false });
    console.log('this.boards: ', this.catches);
  }

  createCatch() {

  }

  signOut() {
    this.auth.logout();
  }
}
