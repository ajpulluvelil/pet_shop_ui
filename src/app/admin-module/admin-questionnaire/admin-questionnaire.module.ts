import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireListingComponent } from './questionnaire-listing/questionnaire-listing.component';
import { QuestionnaireLandingComponent } from './questionnaire-landing/questionnaire-landing.component';
import { QuestionnaireSectionComponent } from './questionnaire-section/questionnaire-section.component';
import { QuestionnaireSectionQuestionComponent } from './questionnaire-section-question/questionnaire-section-question.component';
import { QuestionnaireIntroductionComponent } from './questionnaire-introduction/questionnaire-introduction.component';



@NgModule({
  declarations: [
    QuestionnaireListingComponent,
    QuestionnaireLandingComponent,
    QuestionnaireSectionComponent,
    QuestionnaireSectionQuestionComponent,
    QuestionnaireIntroductionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminQuestionnaireModule { }
