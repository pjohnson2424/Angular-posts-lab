import { Component,Output,EventEmitter} from '@angular/core';
import {Post} from '../social';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() submit = new EventEmitter<object>();
  submitPost = (f: NgForm) => this.submit.emit({title: f.value.title, thought: f.value.thought});

  posts: Post[]=[];

}
  