import { autoinject } from "aurelia-framework";
import { DialogService } from 'aurelia-dialog';
import { Preferences } from "./resources/elements/preferences";
import { TransitTrackerService } from "./resources/services/transit-tracker-service";

@autoinject
export class App {

    constructor(public dialogService: DialogService, public ttService: TransitTrackerService) { }

    openPreferences() {
        this.dialogService.open({
            viewModel: Preferences,
            lock: false,
            startingZIndex: 5
        }).whenClosed(response => {
            if (!response.wasCancelled) {
                console.log('good - ', response.output);
            } else {
                console.log('bad');
            }
            console.log(response.output);
        });
    }

    getProviders() {
        return this.ttService.getProviders();
    }

    getRoutes() {
        return this.ttService.getRoutes();
    }

}
