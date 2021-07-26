import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireListingComponent } from './questionnaire-listing/questionnaire-listing.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireListingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminQuestionnaireRoutingModule { }