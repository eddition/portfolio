$(function(){

  var about = "testing"

  //------------Models---------------------
  var Project = Backbone.Model.extend();

  //------------Collections---------------------
  var Portfolio = Backbone.Collection.extend({
    model: Project
  });

  var portfolio = new Portfolio([
    new Project({ title: "Fan Fanatic", img:"fanfanatic", link: "www.google.com" }),
    new Project({ title: "Office Upgrade", img:"officeuPgrade", link: "www.google.com" }),
    new Project({ title: "Logitech GTV", img:"paxeast", link: "www.google.com" }),
    new Project({ title: "MSC Customs", img:"msc", link: "www.google.com" }),
    new Project({ title: "Viddy-O", img:"viddy", link: "www.google.com" }),
    new Project({ title: "Wallace", img:"wallace", link: "www.google.com" }),
    new Project({ title: "Urban Genius", img:"urban", link: "www.google.com" }),
    new Project({ title: "Smithgroup JJR", img:"smithgroup", link: "www.google.com" })

    ]);


  //------------Views---------------------
  var ProjectView = Backbone.View.extend({

    tageName: "div",
    className: "col-sm-4",

    template: _.template(
      "<div class='project'>" +
      "<p class='roll' ><%= title %></p>" +
      "<a href='<%= link %>'>" +
      "<img src='assets/img/portfolio/<%= img %>.jpeg'>" +
      "</a>" +
      "</div>"
      ),

    render: function(){
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));

      return this;
    }

  });

  var PortfolioView = Backbone.View.extend({

    el: $('#portfolio-container'),

    initialize: function(){
      var self = this;
      self.projects = $('#projects');

      portfolio.each(function(project){
        var projectView = new ProjectView({ model:project });
        self.projects.append(projectView.render().el);
      });
    },

    render:function(){
      return this;
    }

  });

  new PortfolioView();

});






