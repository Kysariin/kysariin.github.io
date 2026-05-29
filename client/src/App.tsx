import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import Hardware from "@/pages/Hardware";
import Audio from "@/pages/Audio";
import Misc from "@/pages/Misc";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/not-found";
import SubpageNav from "@/components/SubpageNav";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SubpageNav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/hardware" component={Hardware} />
        <Route path="/audio" component={Audio} />
        <Route path="/misc" component={Misc} />
        <Route path="/:directory/:slug">
          {(params) => <ProjectDetail category={params.directory} slug={params.slug} />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}