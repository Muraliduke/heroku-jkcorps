import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NavService} from './navigation/nav-service';
import {
  // MatAutocompleteModule,

  // MatButtonToggleModule,
  
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  
  // MatExpansionModule,
  // MatGridListModule,

  // MatNativeDateModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  
  
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
 
  // MatTooltipModule,

  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

// import {A11yModule} from '@angular/cdk/a11y';
// import {BidiModule} from '@angular/cdk/bidi';
// import {ObserversModule} from '@angular/cdk/observers';
// import {OverlayModule} from '@angular/cdk/overlay';
// import {PlatformModule} from '@angular/cdk/platform';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollDispatchModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
import { CoreService } from './service/core.service';
import { MenuComponent } from './navigation/menu.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component'; 


const materialModules = [
   // CDK
  //  A11yModule,
  //  BidiModule,
  //  ObserversModule,
  //  OverlayModule,
  //  PlatformModule,
  //  PortalModule,
  //  ScrollDispatchModule,
  //  CdkStepperModule,
   //CdkTableModule,
   
   // Material
   //MatAutocompleteModule,
   //MatButtonToggleModule,
  //  MatCheckboxModule,
  //  MatChipsModule,
  //  MatDatepickerModule,
  //  MatExpansionModule,
  //  MatGridListModule,
  //  MatProgressBarModule,
  //  MatProgressSpinnerModule,
  //  MatRadioModule,
  //  MatRippleModule,
  //  MatSlideToggleModule,
  //  MatSliderModule,
   MatSnackBarModule,
   MatTableModule,
  //  MatTooltipModule,
  //  MatNativeDateModule,
   MatButtonModule,
   MatCardModule,
   MatDialogModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,
   MatSelectModule,
   MatSidenavModule,
   MatTabsModule,
   MatToolbarModule,
];
import {AppRoutingModule} from './app-routing.module';
import { MenuToolbarComponent } from './navigation/menu-toolbar/menu-toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ...materialModules,AppRoutingModule,
    FlexLayoutModule,],
  declarations: [
    AppComponent,
    MenuComponent,TopNavComponent, MenuToolbarComponent, FooterComponent, DialogComponent
  ],
  providers: [CoreService,NavService],
  exports: [AppComponent,...materialModules,],
  entryComponents: [DialogComponent]
  
})
export class CoreModule {}