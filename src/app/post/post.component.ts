import { Component, Input,Output,EventEmitter } from '@angular/core';
import {Post} from '../social';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Output() changed = new EventEmitter();
  @Input() public ParentData;
posts: Post[]=[]


deletePost(index: number){
  this.posts.splice(index, 1);
}


}
