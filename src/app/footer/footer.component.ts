import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  linkedinIcon = faLinkedin;
  youtubeIcon = faYoutube;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
}
