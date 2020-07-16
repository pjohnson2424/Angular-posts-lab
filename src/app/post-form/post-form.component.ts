import { Component,OnInit,Output,Input,EventEmitter} from '@angular/core';
import {Post} from '../social';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
  }

  title: string;
  thought: string;
  @Input() posts: Post[];

  @Output() submitted = new EventEmitter<object>();
  submitPost = (submit: NgForm) => this.submitted.emit({title: submit.value.title, thought: submit.value.thought});

}
  