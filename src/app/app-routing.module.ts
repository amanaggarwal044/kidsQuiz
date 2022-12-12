import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:':path1',component:HomeComponent},
  {path:':path1/:path2',component:HomeComponent},
  {path:':path1/:path2/:path3',component:HomeComponent},
  {path:':path1/:path2/:path3/:path4',component:HomeComponent},
  {path:':path1/:path2/:path3/:path4/:path5',component:HomeComponent},
  {path:':path1/:path2/:path3/:path4/:path5/:path6',component:HomeComponent},
  {path:':path1/:path2/:path3/:path4/:path5/:path6/:path7',component:HomeComponent},
  {path:':path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
