function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  $(document).ready(function() {
    $("#contact").click(function(event){
      event.preventDefault();
      var firstName= $("#firstname").val();
      var lastName= $("#lastname").val();
  
      var newContact = new Contact( firstName, lastName);
      $("ul#contacts").append("<li><span id='contact'>" + newContact.fullName() + "</span></li>");
    })
  }) 
  Contact.prototype.fullName= function() {
    return this.firstName + " " + this.lastName;
  }