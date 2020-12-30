import { Component, OnInit } from '@angular/core';
import { faFacebookSquare,faGithubSquare,faLinkedin,faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faFacebookSquare=faFacebookSquare
  faGithubSquare=faGithubSquare
  faLinkedin=faLinkedin
  faEnvelope=faEnvelope
  faWhatsappSquare=faWhatsappSquare
  constructor() { }

  ngOnInit(): void {
  }

}
