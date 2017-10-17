import { NgModule } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
import { A11yModule } from '@angular/cdk/a11y';
import {
  MatCommonModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatLineModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPseudoCheckboxModule, MatRadioModule, MatRippleModule, MatSelectModule, MatTableModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

const materialModules = [
   A11yModule, BidiModule, MatCommonModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatLineModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPseudoCheckboxModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class AppMaterialModule { }
