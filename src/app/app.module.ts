import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashComponent } from './shared/component/post-dash/post-dash.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button'
import { MatDialogModule} from '@angular/material/dialog'
import { MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    PostDashComponent,
    PostCardComponent,
    PostFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
