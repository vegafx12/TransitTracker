import { autoinject } from "aurelia-framework";
import { DialogService } from 'aurelia-dialog';
import { Preferences } from "./resources/elements/dialogs/preferences";
import { PreferencesNotSet } from "./resources/elements/dialogs/preferences-not-set";
import { TransitTrackerService } from "./resources/services/transit-tracker-service";

@autoinject
export class App {

    constructor(public dialogService: DialogService, public ttService: TransitTrackerService) {}

    attached() {
        if (!window.localStorage.getItem('user_preferences_fav_routes')) {
            this.PreferencesNotSetDialog();
        };
    }

    PreferencesNotSetDialog() {
        this.dialogService.open({
            viewModel: PreferencesNotSet,
            lock: true
        });
    }

    PreferencesDialog() {
        this.dialogService.open({
            viewModel: Preferences,
            lock: false
        }).whenClosed(response => {
            if (!response.wasCancelled) {
                console.log('good - ', response.output);
            } else {
                console.log('bad');
            }
            console.log(response.output);
        });
    }

}
