import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  vidljiv:boolean = false;

  constructor(){
    this.articles = [
      new Article('Angular 4', 'http://angular.io', 3),
      new Article('Pluralsight', 'https://www.pluralsight.com', 2),
      new Article('W3Schools', 'https://www.w3schools.com', 1)
    ];
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean{
    this.articles.push(new Article(title.value,link.value, 0));
    title.value = '';
    link.value = '';
    this.vidljiv = !this.vidljiv;
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  vidiSe():void {
   this.vidljiv = !this.vidljiv;
  }
  
}
