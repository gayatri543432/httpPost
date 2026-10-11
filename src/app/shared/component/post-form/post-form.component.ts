import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  isInEditMode:boolean=false
  editObj!:Ipost


  @ViewChild('postForm') postForm!:NgForm
  @Output() emitPost:EventEmitter<Ipost>=new EventEmitter<Ipost>()
  @Output() updatePost:EventEmitter<Ipost>=new EventEmitter<Ipost>()


  constructor( private _postService:PostService) { }

  ngOnInit(): void {
    this.onEdit()
  }
  onSubmit(){
    if(this.postForm.valid){
      let newPost=this.postForm.value;
      console.log(newPost)
      this._postService.createPost(newPost)
        .subscribe({
          next:res=>{
            newPost.id=res.name;
            this.emitPost.emit(newPost)
            this.postForm.reset()
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }

  onEdit(){
    this._postService.EditPost$
      .subscribe(res=>{
        this.isInEditMode=true;
        this.editObj=res
        this.postForm.form.patchValue(res)
      })
  }

  onUpdate(){
    if(this.postForm.valid){
      let postObj={
        ...this.postForm.value,
        id:this.editObj.id
      }
      this._postService.updatePost(postObj)
        .subscribe({
          next:res=>{
            this.updatePost.emit(res)
            this.isInEditMode=false
            this.postForm.reset()
          }
        })
    }
  }
}
