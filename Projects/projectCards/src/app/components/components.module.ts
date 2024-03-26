import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";
import { AppModule } from "../app.module";

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent
    ],
    exports: [
        ButtonComponent,
        CardComponent
    ],
})
export class ComponentsModule { }