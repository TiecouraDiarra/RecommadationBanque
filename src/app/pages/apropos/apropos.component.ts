import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit {

  selectedTab: string = 'home';
  constructor(
    private modalService: NgbModal, 
    private elementRef: ElementRef, 
    private renderer: Renderer2) { }

    // ngAfterViewInit(): void {
    //   const portfolioContainer = this.elementRef.nativeElement.querySelector('.portfolio-container');
    //   if (portfolioContainer) {
    //     const portfolioIsotope = new Isotope(portfolioContainer, {
    //       itemSelector: '.portfolio-item',
    //       layoutMode: 'fitRows'
    //     });
  
    //     const portfolioFilters = this.elementRef.nativeElement.querySelectorAll('#portfolio-flters li');
  
    //     portfolioFilters.forEach((filter: { classList: { add: (arg0: string) => void; }; getAttribute: (arg0: string) => any; }) => {
    //       this.renderer.listen(filter, 'click', (e) => {
    //         e.preventDefault();
    //         portfolioFilters.forEach((el: { classList: { remove: (arg0: string) => void; }; }) => {
    //           el.classList.remove('filter-active');
    //         });
    //         filter.classList.add('filter-active');
  
    //         portfolioIsotope.arrange({
    //           filter: filter.getAttribute('data-filter')
    //         });
    //       });
    //     });
    //   }
    // }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  // Méthode pour changer l'onglet sélectionné
  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  // Méthode pour vérifier si un onglet est actif
  isTabActive(tab: string): boolean {
    return this.selectedTab === tab;
  }
}
