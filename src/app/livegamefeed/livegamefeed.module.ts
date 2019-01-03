import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LivegamefeedPage } from './livegamefeed.page';

const routes: Routes = [
  {
    path: '',
    component: LivegamefeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LivegamefeedPage]
})
export class LivegamefeedPageModule {}
