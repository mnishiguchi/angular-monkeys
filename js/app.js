(function() {

  // Module declaration.
  angular.module( "app", [] );


  // ---------------------------------- //
  // ---------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

    AppController.$inject = [];

    function AppController() {

      // The base page title.
      var baseTitle = "Monkies";

      // Register pages here instead of router.
      // - name:        "page id"
      // - label:       "page title"
      // - templateUrl: "path/to/template"
      this.pages = [
        {
          name: "Home",
          label: "Home",
          templateUrl: "partials/home.html"
        },
        {
          name: "Info",
          label: "Info",
          templateUrl: "partials/info.html"
        },
        {
          name: "Gallery",
          label: "Gallery",
          templateUrl: "partials/gallery.html"
        }
      ];

      // By default, "home" is selected.
      this.selected = "home";

      // Expose the public methods.
      this.isSelected   = isSelected;
      this.handleSelect = handleSelect;


      // ---
      // PUBLIC METHODS.
      // ---


      /**
       * Returns true if the specified page name matches the currently selected.
       * else false. Case-insensitive.
       */
      function isSelected( page ) {

        return page.toLowerCase() === this.selected.toLowerCase();

      } // end isSelected


      /**
       * Sets the specified page to the selected state.
       */
      function handleSelect( page ) {

        // Update the selected page.
        this.selected = page;

        // Update the page title.
        window.document.title = ( this.isSelected( "home" ) )
                              ? baseTitle
                              : [ page, " | ", baseTitle ].join("")
                              ;

      } // end handleSelect

    } // end AppController

})(); // end module
