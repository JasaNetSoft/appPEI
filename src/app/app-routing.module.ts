import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
//   { path: 'user-create', loadChildren: './user-create/user-create.module#UserCreatePageModule' },
//   { path: 'user-edit', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
//   { path: 'user-list', loadChildren: './user-list/user-list.module#UserListPageModule' },
//   { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailPageModule' },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', loadChildren: () => import('./user-create/user-create.module').then(m => m.UserCreatePageModule) },
  { path: 'edit/:id', loadChildren: () => import('./user-edit/user-edit.module').then(m => m.UserEditPageModule) },
  { path: 'list', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListPageModule) },
  { path: 'detail', loadChildren: () => import('./user-detail/user-detail.module').then(m => m.UserDetailPageModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
