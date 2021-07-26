import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserQuestionnaireListingComponent } from './user-questionnaire-listing/user-questionnaire-listing.component';
import { UserQuestionnaireLandingComponent } from './user-questionnaire-landing/user-questionnaire-landing.component';
import { UserQuestionnaireSectionComponent } from './user-questionnaire-section/user-questionnaire-section.component';
import { UserQuestionnaireSectionQuestionComponent } from './user-questionnaire-section-question/user-questionnaire-section-question.component';
import { UserQuestionnaireSubmitComponent } from './user-questionnaire-submit/user-questionnaire-submit.component';
import { UserQuestionnaireIntroductionComponent } from './user-questionnaire-introduction/user-questionnaire-introduction.component';



@NgModule({
  declarations: [
    UserQuestionnaireListingComponent,
    UserQuestionnaireLandingComponent,
    UserQuestionnaireSectionComponent,
    UserQuestionnaireSectionQuestionComponent,
    UserQuestionnaireSubmitComponent,
    UserQuestionnaireIntroductionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserQuestionnaireModule { }
