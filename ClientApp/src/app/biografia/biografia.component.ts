import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Bio } from "./biografia";
import { BiografiaService } from "./biografia.service";

@Component({
    selector: 'app-biografia',
    templateUrl: './biografia.component.html',
    styleUrls: ['./biografia.component.css'],
    providers: [BiografiaService]
})
export class BiografiaComponent {
    pagina: string;
    bios: Bio[];

    constructor(private route: ActivatedRoute, private bio: BiografiaService) { }
  
    ngOnInit() {
      this.route.data
        .subscribe((data: { pagina: string }) => {
          this.pagina = data.pagina;
        });
      this.bio.getBios().subscribe((bios) => {
          this.bios = bios;
      });

    }
}
