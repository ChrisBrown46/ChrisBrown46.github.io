import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    config.title = "Aurelia";
    config.map([
      { route: "", redirect: "projects" },
      { route: "projects", name: "projects", moduleId: PLATFORM.moduleName("./projects/projects"), nav: false, title: "Projects" },
      { route: "resume", name: "resume", moduleId: PLATFORM.moduleName("./resume/resume"), nav: false, title: "Resume" },
      { route: "about", name: "about", moduleId: PLATFORM.moduleName("./about/about"), nav: false, title: "About" },
    ]);

    config.mapUnknownRoutes({ route: "", redirect: "projects" });
  }
}
