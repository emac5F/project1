import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-superJumbo-v2.jpg" alt="this is fine meme"/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, rerum. Ipsam quaerat sint voluptate blanditiis odio similique laborum hic sequi nulla minus nostrum facilis, officiis ad repellat dolorem ea quasi.</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
