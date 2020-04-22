import { Component, } from "@angular/core";
import { Resource } from 'src/app/models/Resource.model';

// tslint:disable: max-line-length

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"]
})
export class ResourcesComponent {
  public resources: Resource[] = [
    {
      name: "Angular (2+)",
      details: "Most of my UIs are created using Angular.",
    },
    {
      name: "Node w/ Express",
      details: "Node w/ Express powers my API, connecting to my MongoDB via Mongoose. I also use a simple Express app to serve my Angular apps with Heroku.",
    },
    {
      name: "MongoDb w/ Atlas",
      details: "I use a Mongo Database to store my data. I use a cloud database with Mongo Atlas.",
    },
    {
      name: "Bootstrap w/ Font Awesome",
      details: "For styling most of my applications, I use Bootstrap 4 and the Font Awesome version that it includes.",
    },
    {
      name: "Heroku",
      details: "I use the free tier of Heroku for hosting my web applications.",
    },
    {
      name: "GitHub",
      details: "I use GitHub for remote repositories for my code.",
    },
    {
      name: "Metro Studio",
      details: "I use the free application Metro Studio to generate Favicons for my applications.",
    },
    {
      name: "Travis CI",
      details: "I use the free tier of Travis CI to automatically test most of my applications before they deploy.",
    },
  ];

}
