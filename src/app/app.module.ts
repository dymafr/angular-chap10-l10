import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { APP_ROUTES } from "./app.routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
