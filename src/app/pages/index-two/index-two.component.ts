import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as Tobii from "@midzer/tobii";

// @ts-ignore
import * as CountryCodeLookup from "country-code-lookup";

@Component({
  selector: 'app-index-two',
  templateUrl: './index-two.component.html',
  styleUrls: ['./index-two.component.scss']
})
export class IndexTwoComponent implements OnInit {
  currentSection = 'home';
  constructor() { }

  ngOnInit(): void {
    new Tobii()
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


  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
