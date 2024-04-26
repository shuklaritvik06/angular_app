import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routeparams',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './routeparams.component.html',
  styleUrl: './routeparams.component.css',
})
export class RouteparamsComponent {
  username: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username')!;
    });
  }
  navigateHello() {
    this.router.navigateByUrl(`/user/hellobro`);
  }
}
