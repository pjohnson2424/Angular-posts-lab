import { Component,Output,EventEmitter} from '@angular/core';
import {Post} from '../social';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() changed = new EventEmitter();

  posts: Post[]=[];

  onSubmit(submitted: NgForm) {
    this.posts.push(
      {
        title: submitted.value.title,
        thought: submitted.value.thought
      }
    );
  }
 
  
}