import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Necrons',
      thought: 'Are really cool',
    },
    {
      title: 'DnD',
      thought: 'is this Saturday',
    },
    {
      title: 'Gotta Prep',
      thought: 'Get the Ravenloft sorted',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };

  onSubmit = (post: Post) => {
    this.posts.push(post);
  };
}
