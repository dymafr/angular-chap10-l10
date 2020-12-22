import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

export const APP_ROUTES: Routes = [
  { path: "", component: HomepageComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id", component: UserComponent }]
  },
  // { path: "**", component: NotFoundComponent },
  { path: "**", redirectTo: "" }
];