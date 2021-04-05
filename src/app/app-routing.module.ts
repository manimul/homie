import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomPanelComponent } from './room-panel/room-panel.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'room/:name', component: RoomPanelComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
