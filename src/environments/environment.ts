// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL:'https://platzi-store.herokuapp.com',
  firebaseConfig : {
    apiKey: "AIzaSyDwHGe3ygoMahxjbf9ayad8X_mUO9CrvFk",
    authDomain: "skr-store.firebaseapp.com",
    projectId: "skr-store",
    storageBucket: "skr-store.appspot.com",
    messagingSenderId: "751200398419",
    appId: "1:751200398419:web:cfa34603951e1f0e04eaa6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
