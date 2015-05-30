$(function(){

  //------------Models---------------------
  var Contact = Backbone.Model.extend();

  //------------Collections---------------------
  var ContactCollection = Backbone.Collection.extend({
    model: Contact
  });

  var contactCollection = new ContactCollection([
    new Contact({ method: "Email", icon:"fa fa-envelope icon", link: "mailto:eshin0910@gmail.com" }),
    new Contact({ method: "Facebook", icon:"fa fa-facebook-square icon", link: "https://facebook.com/eddition" }),
    new Contact({ method: "Linkedin", icon:"fa fa-linkedin-square icon", link: "http://www.linkedin.com/pub/edward-shin/32/28b/444" }),
    new Contact({ method: "Github", icon:"fa fa-github-square icon", link: "https://github.com/eddition" })
    ]);


  //------------Views---------------------
  var ContactView = Backbone.View.extend({

    tageName: "div",

    template: _.template(
      "<div class='contact'>" +
      "<p><%= method %></p>" +
      "<a href='<%= link %>'>" +
      "<i class='<%= icon %>'></i>" +
      "</a>" +
      "</div>"
      ),

    render: function(){
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));

      return this;
    }

  });

  var ContactCollectionView = Backbone.View.extend({

    el: $('#contact-container'),

    initialize: function(){
      var self = this;
      self.contacts = $('#contact-container');

      contactCollection.each(function(contact){
        var contactView = new ContactView({ model:contact });
        self.contacts.append(contactView.render().el);
      });
    },

    render:function(){
      return this;
    }

  });

  new ContactCollectionView();

});
