
var config = {
  apiKey: "AIzaSyCBXjp3BdYwOCFJRXuwWi_xV77r7svgRFU",
  authDomain: "contact-app-fff65.firebaseapp.com",
  databaseURL: "https://contact-app-fff65.firebaseio.com",
  storageBucket: "contact-app-fff65.appspot.com",
  };
    firebase.initializeApp(config);

'use strict';
angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  //console.log($firebaseArray); // <- verified here that the injection works
  var ref = firebase.database().ref();
  console.log(ref.key)
 //Get Firebase Contacts
 $scope.contacts = $firebaseArray(ref);

 //Add Form
 $scope.showAddForm = function(){
   $scope.AddForm = true;
 }

 //Hide Form
 $scope.hideAddForm = function(){
   $scope.AddForm = false;
 }

//Edit Show
 $scope.showEditForm = function(contact){
   //console.log(contact)
   $scope.id = contact.$id;
   //console.log(contact.$id)
   $scope.editForm = true;
   $scope.name = contact.name;
   $scope.email = contact.email;
   $scope.company = contact.company;
 }
 $scope.editFormSubmit = function(){
   //console.log("Test");
   //Firebase Values
   var id = $scope.id;
   console.log(id)
   var record = $scope.contacts.$getRecord(id);

   record.name = $scope.name;
   record.email = $scope.email;
   record.company = $scope.company;
   // Build Object
   $scope.contacts.$save(record).then(function(ref){
     //clear form
     clearFields();
     //hide form
     $scope.editForm = false;
     //send message "success"
     $scope.msg = "Contact Updated"
   })
 }

  $scope.addFormSubmit = function(){
    //console.log("Test");
    //Firebase Values
    if($scope.name){ var name=$scope.name} else{var name= null;}
    if($scope.email){ var email=$scope.email} else{var email= null;}
    if($scope.company){ var company=$scope.company} else{var company= null;}

    // Build Object
    $scope.contacts.$add({
      name: name,
      email: email,
      company: company
    }).then(function(ref){
      console.log('Added Contact with ID:'+ref);

      //clear form
      clearFields();

      //hide form
      $scope.AddForm = false;

      //send message "success"
      $scope.msg = "Contact Added"
    })
  }
  //remove
  $scope.removeContact = function(contact){
    console.log('Removing Contact');
    $scope.contacts.$remove(contact);
    $scope.msg = "Contact Removed";
  }
  //clearFields
  function clearFields(){
    $scope.name ="";
    $scope.email = "";
    $scope.company = "";
  }

  $scope.showContact = function(contact){
    console.log(contact)
    $scope.name = contact.name;
    $scope.email = contact.email;
    $scope.company = contact.company;
    $scope.contactShow = true;
  }


}]);
