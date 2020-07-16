import { Component,OnInit} from '@angular/core';
import {Post} from '../social';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})

export class SocialPostsComponent  {
  submitPost = (f: NgForm) => this.submitted.emit({title: f.value.title, thought: f.value.thought});
posts: Post[] = [];


onSubmit(event: object) {
  this.posts.push(event);
}

isDisplay = true;
toggleDisplay(){
  this.isDisplay =!this.isDisplay;
}

deletePost(index: number){
  this.posts.splice(index, 1);
}

}