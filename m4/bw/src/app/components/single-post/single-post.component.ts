import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commento, Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-single-post',
	templateUrl: './single-post.component.html',
	styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

	constructor(private router:Router ,private route: ActivatedRoute,private ps:PostService) {}

	post!: Post

	ngOnInit() {
    this.avvio()
	}

  avvio(){
		this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.ps.getPostbyID(params['id'] ).subscribe((res) => {
          this.post = res
        })
      } else {
        this.ps.getPostbyID(1).subscribe((res) => {
          this.post = res
        })
      }
			}
		);
  }

  cambiaPagina(controller: boolean){
    let postID = Number(this.post.id)
    controller ? postID++ : postID--
    if (postID <= 0) postID = 1
    this.router.navigate(['/post'], { queryParams: { id: postID } });
  }

  aggiungiCommento(form:NgForm){
    this.ps.nuovoCommento(form,this.post).subscribe((res) => {
      console.log(res);
      this.avvio()

    })
  }

}

