import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MediaService } from "../media.service";
import { Video } from "../video";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css'],
    providers: [MediaService]
})
export class VideosComponent implements OnInit {
    videos: Video[];

    constructor(private mediaService: MediaService) { }

    ngOnInit() {
        this.mediaService.getVideos().subscribe((videos) => {
            this.videos = videos;
        });
    }

    getURL(id) {
        return `https://www.youtube.com/embed/${id}?rel=0&controls=2&showinfo=0&modestbranding=0&cc_load_policy=1`
    }
}
