import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';
//import {MathModule} from './math/math.module';

import { ProfileService } from './datain/profile.service';
import { CompilerService } from './datain/compiler.service';
import { HttpClientModule } from '@angular/common/http';
//import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';

import { Alaleht1Component } from './alaleht1/alaleht1.component';
import { Alaleht2Component } from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';

//import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';



//import { TabGroupAlignExample } from './tabs/tabs.component';
import { TabComponent } from './tabx/tabx.component';

import { ElujoudComponent } from './elujoud/elujoud.component';
import { KoondindComponent } from './koondind/koondind.component';
import { Koondind2Component } from './koondind2/koondind2.component';
import { Koondind3Component } from './koondind3/koondind3.component';
import { Koondind4Component } from './koondind4/koondind4.component';
import { Koondind5Component } from './koondind5/koondind5.component';
import { Koondind6Component } from './koondind6/koondind6.component';
import { Koondind7Component } from './koondind7/koondind7.component';
import { Yld1Component } from './yld1/yld1.component';
import { Yld2Component } from './yld2/yld2.component';
import { Yld3Component } from './yld3/yld3.component';
import { Yld4Component } from './yld4/yld4.component';
import { Yld5Component } from './yld5/yld5.component';
import { Yld6Component } from './yld6/yld6.component';
import { Hetk1Component } from './hetk1/hetk1.component';
import { Hetk2Component } from './hetk2/hetk2.component';
import { Hetk3Component } from './hetk3/hetk3.component';
import { Hetk4Component } from './hetk4/hetk4.component';
import { Hetk5Component } from './hetk5/hetk5.component';
import { Hetk6Component } from './hetk6/hetk6.component';
import { Hetk7Component } from './hetk7/hetk7.component';
import { HetkavaComponent } from './hetkava/hetkava.component';
import { Progn1Component } from './progn1/progn1.component';
import { Progn2Component } from './progn2/progn2.component';
import { Progn3Component } from './progn3/progn3.component';
import { Progn4Component } from './progn4/progn4.component';
import { FlrshComponent } from './flrsh/flrsh.component';
import { Varav1Component } from './varav1/varav1.component';
import { Varav2Component } from './varav2/varav2.component';
import { Varav3Component } from './varav3/varav3.component';
import { Varav4Component } from './varav4/varav4.component';
import { Varav4aComponent } from './varav4a/varav4a.component';
import { Varav5Component } from './varav5/varav5.component';
import { Varav6Component } from './varav6/varav6.component';
import { Varav7Component } from './varav7/varav7.component';
import { Varav8Component } from './varav8/varav8.component';
import { Varav9Component } from './varav9/varav9.component';
import { Varav10Component } from './varav10/varav10.component';
//import { Graaf1Component } from './graaf1/graaf1.component';
//import { Graaf2Component } from './graaf2/graaf2.component';
import { Graaf3Component } from './graaf3/graaf3.component';
import { Graaf4Component } from './graaf4/graaf4.component';
import { Graaf5Component } from './graaf5/graaf5.component';
import { Graaf6Component } from './graaf6/graaf6.component';
import { Graaf7Component } from './graaf7/graaf7.component';
import { Graaf8Component } from './graaf8/graaf8.component';
import { Graaf9Component} from './graaf9/graaf9.component';
import { Graaf10Component } from './graaf10/graaf10.component';
import { Graaf11Component } from './graaf11/graaf11.component';
import { Graaf12Component } from './graaf12/graaf12.component';
import { GraafMudelEfektComponent } from './graafMudelEfekt/graafMudelEfekt.component';
import { GraafMudelMaksComponent } from './graafMudelMaks/graafMudelMaks.component';
import { GraafMudelVoimComponent } from './graafMudelVoim/graafMudelVoim.component';
import { GraafMudelTasuvComponent } from './graafMudelTasuv/graafMudelTasuv.component';
import { GraafMudelToojoudComponent } from './graafMudelToojoud/graafMudelToojoud.component';
import { Terminal1Component } from './terminal1/terminal1.component';
import { Terminal2Component } from './terminal2/terminal2.component';
import { Terminal3Component } from './terminal3/terminal3.component';
import { Terminal4Component } from './terminal4/terminal4.component';
import { Terminal5Component } from './terminal5/terminal5.component';
import { SoovitusComponent } from './soovitus/soovitus.component';
import { KonsultantComponent } from './konsultant/konsultant.component';
import { KonsultantAvaComponent } from './konsultantava/konsultantava.component';
import { KonsultantInfoComponent } from './konsultantinfo/konsultantinfo.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { Tabel1Component } from './tabel1/tabel1.component';
import { Tabel2Component } from './tabel2/tabel2.component';
import { Tabel3Component } from './tabel3/tabel3.component';
import { Tabel4Component } from './tabel4/tabel4.component';
import { Tabel5Component } from './tabel5/tabel5.component';
import { Tabele1Component } from './tabele1/tabele1.component';
import { Tabele2Component } from './tabele2/tabele2.component';
import { Tabele3Component } from './tabele3/tabele3.component';
import { Tabele4Component } from './tabele4/tabele4.component';
import { Tabele5Component } from './tabele5/tabele5.component';
import { Sekt1Component } from './sekt1/sekt1.component';
import { Sekt2Component } from './sekt2/sekt2.component';
import { Sekt3Component } from './sekt3/sekt3.component';
import { Sekt4Component } from './sekt4/sekt4.component';
import { Sekt5Component } from './sekt5/sekt5.component';
import { Sektp1Component } from './sektp1/sektp1.component';
import { Sektp2Component } from './sektp2/sektp2.component';
import { Sektp3Component } from './sektp3/sektp3.component';
import { Sektp4Component } from './sektp4/sektp4.component';
import { Sektp5Component } from './sektp5/sektp5.component';
import { Sekts1Component } from './sekts1/sekts1.component';
import { Sekts2Component } from './sekts2/sekts2.component';
import { Sekts3Component } from './sekts3/sekts3.component';
import { Sekts4Component } from './sekts4/sekts4.component';
import { Sekts5Component } from './sekts5/sekts5.component';
import { XroadImitComponent } from './XroadImit/XroadImit.component';
import { DatainComponent } from './datain/datain.component';
import { LahteinfoComponent} from './lahteinfo/lahteinfo.component';
import { LahteinfobackComponent } from './lahteinfoback/lahteinfoback.component';
import { LahteturnComponent } from './lahteturn/lahteturn.component';
import { LahtealumineComponent } from './lahtealumine/lahtealumine.component';
import { IlukiriComponent } from './ilukiri/ilukiri.component';
import { IlukrattComponent } from './ilukratt/ilukratt.component';
import { IlukviaComponent } from './ilukvia/ilukvia.component';
import { Ilulisaf1Component } from './ilulisaf1/ilulisaf1.component';
import { Ilulisaf2Component } from './ilulisaf2/ilulisaf2.component';
import { Ilulisaf3Component } from './ilulisaf3/ilulisaf3.component';
import { Ilulisaf4Component } from './ilulisaf4/ilulisaf4.component';
import { Ilulisaf5Component } from './ilulisaf5/ilulisaf5.component';
import { Ilulisaf6Component } from './ilulisaf6/ilulisaf6.component';
import { IlusektorComponent } from './ilusektor/ilusektor.component';
import { IluklasterComponent } from './iluklaster/iluklaster.component';
import { IluprognoosComponent } from './iluprognoos/iluprognoos.component';
import { Iluprognoos1Component } from './iluprognoos1/iluprognoos1.component';
import { IlusoovitusComponent } from './ilusoovitus/ilusoovitus.component';
import { IlueluComponent } from './iluelu/iluelu.component';
import { InfoakenComponent} from './infoaken/infoaken.component';
import { MetraportComponent } from './metraport/metraport.component';
import { Metraport2Component } from './metraport2/metraport2.component';
import { MetlouadComponent } from './metlouad/metlouad.component';
import { MettextComponent } from './mettext/mettext.component';
import { MaakComponent } from './maak/maak.component';
import { Maak1Component } from './maak1/maak1.component';
import { Maak2Component } from './maak2/maak2.component';
import { Maak3Component } from './maak3/maak3.component';
import { Maak4Component } from './maak4/maak4.component';

//import { ElujouLibComponent } from 'elujou-lib';

import { ElujouLibComponent } from '../../projects/elujou-lib/src/lib/elujou-lib.component';
import { ElujoutestComponent } from '../../projects/elujou-lib/src/lib/elujoutest/elujoutest.component';
import { ElujouLibModule } from '../../projects/elujou-lib/src/lib/elujou-lib.module';

import { ParentComponent } from '../../projects/elujou-lib/src/lib/elujou-double/elujou-double.component';
import { ChildComponent } from '../../projects/elujou-lib/src/lib/elujou-double/elujou-double.component';

//import { ElujouLibComponent } from './projects/elujou-lib/src/lib/elujou-lib.component';

@NgModule({
  imports: [
    BrowserModule,
    ElujouLibComponent,
    ElujoutestComponent,
    ElujouLibModule,
    FormsModule,
    HttpClientModule,
  //  MatFormFieldModule, MatDialogModule, MatInputModule,

    //NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    
    NgxGaugeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //MathModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    ParentComponent,
    ChildComponent,

    AppComponent,
    TopBarComponent,
    ProductListComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    ElujoudComponent,
    KoondindComponent,
    Koondind2Component,
    Koondind3Component,
    Koondind4Component,
    Koondind5Component,
    Koondind6Component,
    Koondind7Component,
    TabComponent,
    Yld1Component,
    Yld2Component,
    Yld3Component,
    Yld4Component,
    Yld5Component,
    Yld6Component,
    Hetk1Component,
    Hetk2Component,
    Hetk3Component,
    Hetk4Component,
    Hetk5Component,
    Hetk6Component,
    Hetk7Component,
    HetkavaComponent,
    Progn1Component,
    Progn2Component,
    Progn3Component,
    Progn4Component,
    FlrshComponent,
    Varav1Component,
    Varav2Component,
    Varav3Component,
    Varav4Component,
    Varav4aComponent,
    Varav5Component,
    Varav6Component,
    Varav7Component,
    Varav8Component,
    Varav9Component,
    Varav10Component,
    Graaf3Component,
    Graaf4Component,
    Graaf5Component,
    Graaf6Component,
    Graaf7Component,
    Graaf8Component,
    Graaf9Component,
    Graaf10Component,
    Graaf11Component,
    Graaf12Component,
    GraafMudelEfektComponent,
    GraafMudelMaksComponent,
    GraafMudelVoimComponent,
    GraafMudelTasuvComponent,
    GraafMudelToojoudComponent,
    Terminal1Component,
    Terminal2Component,
    Terminal3Component,
    Terminal4Component,
    Terminal5Component,
    SoovitusComponent,
    Tabel1Component,
    Tabel2Component,
    Tabel3Component,
    Tabel4Component,
    Tabel5Component,
    Tabele1Component,
    Tabele2Component,
    Tabele3Component,
    Tabele4Component,
    Tabele5Component,
    Sekt1Component,
    Sekt2Component,
    Sekt3Component,
    Sekt4Component,
    Sekt5Component,
    Sektp1Component,
    Sektp2Component,
    Sektp3Component,
    Sektp4Component,
    Sektp5Component,
    Sekts1Component,
    Sekts2Component,
    Sekts3Component,
    Sekts4Component,
    Sekts5Component,
    KonsultantComponent,
    KonsultantAvaComponent,
    KonsultantInfoComponent,
    XroadImitComponent,
    DatainComponent,
    LahteinfoComponent,
    LahteinfobackComponent,
    LahteturnComponent,
    LahtealumineComponent,
    IlukiriComponent,
    IlukrattComponent,
    IlukviaComponent,
    Ilulisaf1Component,
    Ilulisaf2Component,
    Ilulisaf3Component,
    Ilulisaf4Component,
    Ilulisaf5Component,
    Ilulisaf6Component,
    IlusektorComponent,
    IluklasterComponent,
    IluprognoosComponent,
    Iluprognoos1Component,
    IlusoovitusComponent,
    IlueluComponent,
    InfoakenComponent,
    MetraportComponent,
    Metraport2Component,
    MetlouadComponent,
    MettextComponent,
    MaakComponent,
    Maak1Component,
    Maak2Component,
    Maak3Component,
    Maak4Component
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [ProfileService, CompilerService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/