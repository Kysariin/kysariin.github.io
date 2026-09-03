import React from "react";
import { Switch, Route } from "wouter";

import Index from "@/pages/Index";
import Entry from "@/pages/Entry";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/work/:slug">{(params) => <Entry slug={params.slug} />}</Route>
      <Route path="/writing/:slug">{(params) => <Entry slug={params.slug} />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}
