import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    //Componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Cosas visibles
    exports:[
        ListadoComponent
    ],
    //Van modulos solo modulos
    imports: [
        //hace funciona las directivas for, if etc...
        CommonModule
    ]
})

export class HeroesModule{

} 