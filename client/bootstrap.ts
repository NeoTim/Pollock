import { bootstrap } from 'angular2/platform/browser'
import { Component, View, provide } from 'angular2/core';
// import { RouteConfig, RouteParams, RouterLink, RouterOutlet, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router, Location, Route } from 'angular2/router';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, RouteConfig, Route, ROUTER_DIRECTIVES, APP_BASE_HREF } from 'angular2/router';
import { HomeComponent } from './components/home/home';
import { Navbar } from './components/navbar/index';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { Action } from './components/action/action';
import { PollsList } from './components/pollslist/pollslist';
import { PollEditor } from './components/polleditor/index';
import { Stats } from './components/stats/stats';

@Component({
	selector: 'app'
})
@View({
	template: `
	<navbar></navbar>
	<div class="main">
    	<router-outlet></router-outlet>
	</div>`,
	// template: '<router-outlet></router-outlet>',
	directives: [Navbar, HomeComponent, SignIn, SignUp, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', component: HomeComponent, name: 'Home' },
	{ path: '/signin', component: SignIn, name: 'SignIn' },
	{ path: '/signup', component: SignUp, name: 'SignUp' },
	{ path: '/action', component: Action, name: 'Action' },
	{ path: '/pollslist', component: PollsList, name: 'PollsList' },
	{ path: '/editor', component: PollEditor, name: 'PollEditor' },
	{ path: '/stats/:id', component: Stats, name: 'Stats' },
])
export class App { }

bootstrap(App, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/' }),
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
