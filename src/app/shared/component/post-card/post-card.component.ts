import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../model/post.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postObj!:Ipost
  @Output() emitRemovePost:EventEmitter<string>=new EventEmitter<string>()

  constructor( private _matDialog:MatDialog,
    private _postService:PostService
  ) { }

  ngOnInit(): void {
  }

  onRemove(id:string){
    let config=new MatDialogConfig()
    config.width='400px';
    config.data=`Are you Sure? You want to remove post with id ${id}`
    let matRef=this._matDialog.open(GetConfirmComponent,config)
    matRef.afterClosed()
      .subscribe(flag=>{
        if(flag){
          this._postService.removePost(id)
            .subscribe({
              next:res=>{
                this.emitRemovePost.emit(id)

              }
            })
        }
      })
  }

  onEdit(post:Ipost){
    this._postService.EditPost$.next(post)
  }

}
