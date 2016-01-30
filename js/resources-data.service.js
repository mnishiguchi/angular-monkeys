(function() {

  angular
    .module( "app" )
    .factory( "ResourcesData", ResourcesData );

    ResourcesData.$inject = [];

    function ResourcesData() {

      // Return the API.
      return {

        getData: function getData() { return resouces; }

      };


    } // end ResourcesData


    var resouces = [

      {
        name: "The Impossible Housing and Handling Conditions of Monkeys in Research Laboratories",
        linkUrl: "http://www.ippl.org/newsletter/2000s/084_v28_n2_2001-08.pdf#page=5",
        desc: "An article by Viktor Reinhardt, International Primate Protection League, August 2001"
      },
      {
        name: "The Problem with Pet Monkeys",
        linkUrl: "http://exoticpets.about.com/cs/primates/a/primatesaspets.htm",
        desc: "An article by veterinarian Lianne McLeod on About.com"
      },
      {
        name: "Helping Hands: Monkey helpers for the disabled",
        linkUrl: "https://monkeyhelpers.org/",
        desc: "A U.S. national non-profit organization based in Boston Massachusetts that places specially trained capuchin monkeys with people who are paralyzed or who live with other severe mobility impairments"
      },
      // {
      //   name: "",
      //   linkUrl: "",
      //   desc: ""
      // }
    ];


})(); // end module
