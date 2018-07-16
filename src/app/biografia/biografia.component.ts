import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-biografia',
    templateUrl: './biografia.component.html'
})
export class BiografiaComponent {
    pagina: string;

    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.data
        .subscribe((data: { pagina: string }) => {
          this.pagina = data.pagina;
        });
    }
}
