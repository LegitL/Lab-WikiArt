import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: 'discover/styles',
    loadChildren: () => import('./styles/styles.module').then(m => m.StylesPageModule)
  },
  {
    path: 'style-details/:slug',
    loadChildren: () => import('./style-details/style-details.module').then(m => m.StyleDetailsPageModule)
  },
  {
    path: 'discover/artists',
    loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'painting',
    loadChildren: () => import('./painting/painting.module').then(m => m.PaintingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
