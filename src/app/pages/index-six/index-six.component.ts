import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typed from 'typed.js/src/typed.js';

@Component({
  selector: 'app-index-six',
  templateUrl: './index-six.component.html',
  styleUrls: ['./index-six.component.scss']
})
export class IndexSixComponent implements OnInit {
  currentSection = 'home';

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: [
        "Agency", "Software", "Technology", "Studio", "Webapps"],
      typeSpeed: 100,
      backSpeed: 20,
      showCursor: false,
      loop: true
    };
    new Typed('.typed-element', options);
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar') as HTMLInputElement;
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }

    const mybutton = document.getElementById("back-to-top") as HTMLInputElement;
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  Profil() {
    document.getElementById('AfficherProfil')?.classList.toggle('show');
  }
  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
