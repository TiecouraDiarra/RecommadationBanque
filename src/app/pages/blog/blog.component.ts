import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: any
  blogT: any


  constructor(
    private router: Router,
    private serviceBlog: BlogService,
    ) { 
      this.blogT = this.serviceBlog.blogs
    }

  ngOnInit(): void {
     //AFFICHER LA LISTE DES BANQUES
     this.serviceBlog.AfficherLaListeBlog().subscribe(data => {
      this.blog = data;
      console.log(this.blog);
    });
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

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS BANQUE
  
  goToDettailBlog(id: number) {
    return this.router.navigate(['detail-blog', id])
  }
}
