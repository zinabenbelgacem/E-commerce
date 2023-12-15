import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CloudinaryModule} from '@cloudinary/ng';



// import and register filepond file type validation plugin

import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import * as FilepondPluginImageEdit from 'filepond-plugin-image-edit';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin

registerPlugin(FilePondPluginFileValidateType,FilepondPluginImageEdit,FilepondPluginImagePreview);
@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    EditComponent,
  CreateComponent
    
  ],
  
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    FormsModule,
    FilePondModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule, 
ReactiveFormsModule,
CloudinaryModule,
FilePondModule,

  ]
})
export class ProductsModule { }
