import { Component, Input} from '@angular/core';
import {Post} from '../social';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post;
  
posts: Post[]=[]


deletePost(index: number){
  this.posts.splice(index, 1);
}


}