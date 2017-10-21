import { HttpClient, json } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";

// Transit Tracker Service Class will connect to Metro Transit API and return Next Trip data to be used by web app

let httpClient = new HttpClient();

httpClient.configure(config => {
  config
    .withBaseUrl('http://svc.metrotransit.org/nextrip/')
    .withDefaults({
      headers: {
        'Accept': 'application/json'
      }
    })
    .withInterceptor({
      request(request) {
        console.log(`Requesting ${request.method} ${request.url}`);
        return request;
      },
      response(response) {
        console.log(`Received ${response.status} ${response.url}`);
        return response;
      }
    });
});

@autoinject
export class TransitTrackerService {

  getProviders() {
    httpClient.fetch('providers').then(res => {
      return res.json();
    });
  }

  getAllRoutes() {
    let allRoutes = []

    httpClient.fetch('routes').then(res => {
      return res.json();
    })
    .then(data => {
      for (let i of data) {
        allRoutes.push(i);
      }
    });

    return allRoutes;
  }

}
