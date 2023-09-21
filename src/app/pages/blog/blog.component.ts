import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public recentarticleOwlOptions: OwlOptions = {
  //   margin: 24,
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: [
  //     "<i class='fa-solid fa-angle-left'></i>",
  //     "<i class='fa-solid fa-angle-right'></i>",
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 3
  //     },
  //     1170: {
  //       items: 1,
  //       loop: true
  //     }
  //   },
  //   nav: false,
  // };

}
