
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaderboard from "./pages/Leaderboard";
import Community from "./pages/Community";
import Courses from "./pages/Courses";
import Ebooks from "./pages/Ebooks";
import Projects from "./pages/Projects";
import Affiliate from "./pages/Affiliate";
import Purchase from "./pages/Purchase";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<Community />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
