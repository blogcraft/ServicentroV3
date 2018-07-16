import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  pagina: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { pagina: string }) => {
        this.pagina = data.pagina;
      });
  }
}