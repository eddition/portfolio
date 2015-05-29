$(function(){

	//-----------Models-----------------
	var WorkModel = Backbone.Model.extend();
	var SchoolModel = Backbone.Model.extend();

	//----------Collection---------------
	var ExperiencesCollection = Backbone.Collection.extend({
		model: WorkModel
	});

	var experienceCollection = new ExperiencesCollection ([
		new WorkModel({ 
			company: "Capco"
			, title: "Consultant/Developer"
			,  date: "Jul 14 - current" 
		}),

		new WorkModel({ 
			company: "Kindred Development"
			, title: "Developer"
			,  date: "Feb 14 - Jul 14" 
		}),

		new WorkModel({ 
			company: "Sony Music Entertainment"
			, title: "New Release Analyst"
			,  date: "May 12 - Sep 13" 
		}),

		new WorkModel({ 
			company: "Dentium America"
			, title: "Marketing Manager"
			,  date: "Oct 11 - May 12" 
		})

		]);

	var SchoolCollection = Backbone.Collection.extend({
		model: SchoolModel
	});

	var schoolCollection = new SchoolCollection([
		new SchoolModel({
			school: "Stony Brook University (B.S.)"
			, date: "Sep 07 - Dec 10"
			, major: "Finance / Renaissance Literature"
		}),

		new SchoolModel({
			school: "General Assembly"
			, date: "Aug 13 - Dec 13"
			, major: "Web Development Immersive"
		})

		]);

	//-----------Views-------------------
	var WorkView = Backbone.View.extend({
		tagName: "div",
		className: "work",

		template: _.template(
			"<div class=col-sm-8>" +
			"<h5><%= company %></h5>" +
			"<h6><%= title %></h6>" +
			"</div>" +
			"<div class='col-sm-4'>" +
			"<h6><%= date %></h6>" +
			"</div>"
			),

		render: function(){
			var attributes = this.model.toJSON();
			this.$el.append(this.template(attributes));

			return this;
		}
	});

	var ExperiencesView = Backbone.View.extend({
		el: "#experience",

		initialize: function(){
			var self = this;
			self.work = $("#work");

			experienceCollection.each(function(work){
				var workView = new WorkView({model:work});
				self.work.append(workView.render().el);
			});
		},

		render: function(){
			return this;
		}
	});

	var SchoolView = Backbone.View.extend({
		tagName: "div",
		className: "education",

		template: _.template(
			"<div class=col-sm-8>" +
			"<h5><%= school %></h5>" +
			"<h6><%= major %></h6>" +
			"</div>" +
			"<div class='col-sm-4'>" +
			"<h6><%= date %></h6>" +
			"</div>"
			),

		render: function(){
			var attributes = this.model.toJSON();
			this.$el.append(this.template(attributes));

			return this;
		}

	});

	var SchoolCollectionsView = Backbone.View.extend({
		el: "#experience",

		initialize: function(){
			var self = this;
			self.school = $("#school");

			schoolCollection.each(function(school){
				var schoolView = new SchoolView({model:school});
				self.school.append(schoolView.render().el)
			});
		},

		render: function(){
			return this;
		}

	});

	new ExperiencesView();
	new SchoolCollectionsView();

});










