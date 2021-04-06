import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { OverviewPanelComponent } from './overview-panel/overview-panel.component';
import { RoomPanelComponent } from './room-panel/room-panel.component';
import { RoomsListPanelComponent } from './rooms-list-panel/rooms-list-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { costIcon } from './svg/cost';
import { devicesIcon } from './svg/devices';
import { temperatureIcon } from './svg/temperature';
import { energyIcon } from './svg/energy';
import { peopleIcon } from './svg/people';
import { humidityIcon } from './svg/humidity';

@NgModule({
  declarations: [
    AppComponent,
    DataCardComponent,
    DashboardComponent,
    HeaderComponent,
    IconComponent,
    OverviewPanelComponent,
    RoomPanelComponent,
    RoomsListPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SvgIconsModule.forRoot({
      sizes: {
        md: '2rem',
        lg: '24rem',
      },
      icons: [
        costIcon,
        peopleIcon,
        devicesIcon,
        humidityIcon,
        energyIcon,
        temperatureIcon,
      ],
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
