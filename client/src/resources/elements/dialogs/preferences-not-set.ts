import { autoinject, bindable } from "aurelia-framework";
import { DialogController } from "aurelia-dialog";
import { TransitTrackerService } from "../../services/transit-tracker-service";

@autoinject
export class PreferencesNotSet {

    constructor(public ttService: TransitTrackerService) { }

    @bindable providers = this.ttService.getProviders();
    @bindable routes = this.ttService.getAllRoutes();
    @bindable selectedFavoriteRoutes = [];

    getRoutesBySelectedProviders(event, value) {

        if (event) {
            this.routes.forEach((item) => {
                if (item.ProviderID == value) {
                    this.selectedFavoriteRoutes.push(item);
                }
            });

            console.log(this.selectedFavoriteRoutes);
        };



        if (!event) {
            var indices = [];
            var idx = this.selectedFavoriteRoutes.indexOf(value);

            while(idx != -1) {
                indices.push(idx);
                idx = this.selectedFavoriteRoutes.indexOf(value, idx + 1);
            }
            this.selectedFavoriteRoutes.splice(this.selectedFavoriteRoutes.indexOf(indices), 1);
            

            console.log(this.selectedFavoriteRoutes);
            console.log(value);
            console.log(this.selectedFavoriteRoutes.indexOf(value))
        }
        

        // this.selectedFavoriteRoutes.splice(this.selectedFavoriteRoutes.indexOf(value), 1);
    }

}

