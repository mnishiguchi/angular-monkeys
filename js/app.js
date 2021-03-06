(function() {

  //=============================================//
  // Module declaration.
  //=============================================//


  angular
    .module( "app", [
      "ngRoute"
    ]);


  //=============================================//
  // Router configuration.
  //=============================================//


  angular
    .module( "app" )
    .config( config )
    .run( run );

  config.$inject = [
    "$routeProvider"
  ];

  function config( $routeProvider ) {

    $routeProvider

      .when("/", {
          title:       "Home",
          templateUrl: "partials/home.html"
      })
      .when("/information", {
          title:       "Information",
          templateUrl: "partials/information.html"
      })
      .when("/species", {
          title:       "Species",
          templateUrl: "partials/species.html"
      })
      .when("/interaction", {
          title:       "Interaction",
          templateUrl: "partials/interaction.html"
      })
      // .when("/gallery", {
      //     title:       "Gallery",
      //     templateUrl: "partials/gallery.html",
      //     controller:   GalleryController,
      //     controllerAs: "vm",
      //     resolve:      GalleryController.resolve
      // })
      .when("/resources", {
          title:       "Resources",
          templateUrl: "partials/resources.html",
          controller:   ResourcesController,
          controllerAs: "vm",
          resolve:      ResourcesController.resolve
      })
      .otherwise({
          redirectTo: "/"
      });

  } // end config


  run.$inject = [
    "$rootScope",  // To pass data to topNavbar.
    "$route"       // To access route data.
  ];

  function run( $rootScope, $route ) {

    var baseTitle = " | Monkeys";

    $rootScope.$on( "$routeChangeSuccess", function() {

      // Set page title.
      if ( $route.current.title ) {

        window.document.title = $route.current.title + baseTitle;

      }

    });

  } // end run


  //=============================================//
  // Controllers for some views.
  //=============================================//


  angular
    .module( "app" )
    .controller( "GalleryController", GalleryController );

    GalleryController.resolve = {
      _data: function( GalleryData ) {
        return GalleryData.getData();
      }
    };

    GalleryController.$inject = [
      "_data"
    ];

    function GalleryController( _data ) {

      this.monkeys = _data;

    } // end GalleryController


  angular
    .module( "app" )
    .controller( "ResourcesController", ResourcesController );

    ResourcesController.resolve = {
      _data: function( ResourcesData ) {
        return ResourcesData.getData();
      }
    };

    ResourcesController.$inject = [
      "_data"
    ];

    function ResourcesController( _data ) {

      this.resources = _data;

    } // end ResourcesController


  //=============================================//
  // Layout commonents.
  //=============================================//


  /**
   * Controls top navigation and switches page contents when user clicks on
   * a navigation link.
   */
  angular
    .module( "app" )
    .component( "topNavbar", {

      bindings: {},
      templateUrl: 'layout/top-navbar.html',
      controller:  TopNavbarController,

    });

  angular
    .module( "app" )
    .controller( "TopNavbarController", TopNavbarController );

    TopNavbarController.$inject = [
      "$route",
      "$location"
    ];

    function TopNavbarController( $route, $location ) {

      var vm  = this;

      vm.paths     = [];  // The "#" paths, e.g., "#/about".
      vm.labels    = [];  // The same as the page title.
      vm.activeTab = "";  // The name of the active tab.

      // Rejects trailing slash.
      var pathRegex = /^\/\w*[^\/]$/;

      // Extracts a list of paths and labels from routes info.
      angular.forEach( $route.routes, function( value, key ) {

        // If a valid path name is found, push to the lists.
        if ( key == "/" || key.match( pathRegex ) ) {
          vm.paths.push( "#" + key );
          vm.labels.push( value.title );

          // If the current path is found, remember the title as a active tab.
          if ( key == $location.path() ) {
            vm.activeTab = value.title;
          }
        }

      }); // end angular.forEach

    } // end TopNavbarController

})(); // end module
