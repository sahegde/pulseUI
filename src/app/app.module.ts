import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { RealtimeComponent } from "./realtime/realtime.component";
import { InteractiveComponent } from "./interactive/interactive.component";
import { HistoryComponent } from "./history/history.component";
import { BarchartComponent } from "./barchart/barchart.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RegisterComponent,
        HomeComponent,
        RealtimeComponent,
        InteractiveComponent,
        HistoryComponent,
        BarchartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
