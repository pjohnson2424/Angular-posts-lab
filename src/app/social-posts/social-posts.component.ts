import { Component,OnInit} from '@angular/core';
import {Post} from '../social';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})

export class SocialPostsComponent  {

posts: Post[] = [];


onSubmit(submitted: NgForm) {
  this.posts.push(
    {
      title: submitted.value.title,
      thought: submitted.value.thought
    }
  );
}

isDisplay = true;
toggleDisplay(){
  this.isDisplay =!this.isDisplay;
}

deletePost(index: number){
  this.posts.splice(index, 1);
}

}