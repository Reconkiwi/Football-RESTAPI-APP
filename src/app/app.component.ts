import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Fixtures',
            url: '/fixtures',
            icon: 'ios-football'
        },
        {
            title: 'League Table',
            url: '/leaguetable',
            icon: 'ios-trophy'
        },
        {
            title: 'Live Pitch',
            url: '/livegamefeed',
            icon: 'ios-notifications'
        },
        {

        },
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/LUFCNewsOfficial2017/',
            icon: 'logo-facebook',
            class: 'facebook'
        },
        {
            title: 'Instagram',
            url: 'https://www.facebook.com/LUFCNewsOfficial2017/',
            icon: 'logo-instagram'
        },
        {
            title: 'Twitter',
            url: 'https://www.facebook.com/LUFCNewsOfficial2017/',
            icon: 'logo-twitter'
        },
        {
            title: 'Youtube',
            url: 'https://www.facebook.com/LUFCNewsOfficial2017/',
            icon: 'logo-youtube'
        },
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
