import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/post.interface';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {
  postArr:Ipost[]=[]
  constructor( private _postService:PostService,
    private _snackBarService:SnackBarService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this._postService.fetchPost()
      .subscribe({
        next:res=>{
          for (const key in res) {
           this.postArr.unshift({
            ...res[key],
            id:key
           })
          }

         
        },
        error:err=>{
          console.log(err)
        }
      })

  }

  onPostSubmit(post:Ipost){
    this.postArr.unshift(post)
     this._snackBarService.snackBar(`The post with Id ${post.id} created successfully...`)
  }

  onRemove(id:string){
    let getIndex=this.postArr.findIndex(p=>p.id === id)
    this.postArr.splice(getIndex,1)
     this._snackBarService.snackBar(`The post with Id ${id} removed successfully...`)
  }

  onUpdate(post:Ipost){
    let getIndex=this.postArr.findIndex(p=> p.id === post.id)
    this.postArr[getIndex]=post
     this._snackBarService.snackBar(`The post with Id ${post.id} Updated successfully...`)


  }
}
