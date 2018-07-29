import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent implements OnInit {

  pagina: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { pagina: string }) => {
        this.pagina = data.pagina;
      });
  }

}
