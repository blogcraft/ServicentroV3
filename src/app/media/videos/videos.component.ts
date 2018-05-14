import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {
    videos = [
        "https://www.youtube.com/embed/E0cHvNSsINg?rel=0&amp;controls=0&amp;showinfo=0",
        "https://www.youtube.com/embed/McL_HEjgo7Q?rel=0&amp;controls=0&amp;showinfo=0",
        "https://www.youtube.com/embed/8Kxdy7_7gO0?rel=0&amp;controls=0&amp;showinfo=0",
        "https://www.youtube.com/embed/PGRCQo11hDE?rel=0&amp;controls=0&amp;showinfo=0",
        "https://www.youtube.com/embed/z1W8JRVVqNU?rel=0&amp;controls=0&amp;showinfo=0",
        "https://www.youtube.com/embed/_EKQqzKMUIs?rel=0&amp;controls=0&amp;showinfo=0"
    ]
    constructor() { }

    ngOnInit() { }
}
