import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import Systems from "@/pages/Systems";
import Sound from "@/pages/Sound";
import Misc from "@/pages/Misc";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/not-found"; // Note: your file image shows 'not-found.tsx' lowercase

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/systems" component={Systems} />
        <Route path="/sound" component={Sound} />
        <Route path="/misc" component={Misc} />
        <Route path="/project/:category/:slug">
          {(params) => <ProjectDetail category={params.category} slug={params.slug} />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}