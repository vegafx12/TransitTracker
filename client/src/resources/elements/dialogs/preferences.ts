import { autoinject } from "aurelia-framework";
import { DialogController, DialogService } from "aurelia-dialog";
import { TransitTrackerService } from "../../services/transit-tracker-service";

@autoinject
export class Preferences {
  
  constructor(public controller: DialogController, public ttService: TransitTrackerService) {  }

  routes;

  activate() {
      // this.routes = this.ttService.getAllRoutes();
      // console.log(this.routes);
  }

  created() {
    // console.log(this.routes);
  }
}
