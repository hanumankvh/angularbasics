import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.modal';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass='row';
@Input() article:Article;
//articles:Article[];
// votes: number;
// title: string;
// link: string;
  constructor() {
    //this.article=new Article('Angular5','Angular.io',10)
    // this.title="Angular 5";
    // this.link="Angular.io";
    // this.votes=10;
   }
   voteUp():boolean
   {
     this.article.voteUp();
     return false;
   }
   voteDown():boolean
   {
     this.article.voteDown();
     return false;
   }
  ngOnInit() {
  }

}
