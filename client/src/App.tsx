import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Embedded from "@/pages/embedded";
import Sound from "@/pages/sound";
import Misc from "@/pages/misc";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/embedded" component={Embedded} />
      <Route path="/sound" component={Sound} />
      <Route path="/misc" component={Misc} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
