import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'fixtures', loadChildren: './fixtures/fixtures.module#FixturesPageModule' },
    { path: 'leaguetable', loadChildren: './leaguetable/leaguetable.module#LeaguetablePageModule' },
    { path: 'livegamefeed', loadChildren: './livegamefeed/livegamefeed.module#LivegamefeedPageModule' },
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: ':slug', loadChildren: './post/post.module#PostPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
