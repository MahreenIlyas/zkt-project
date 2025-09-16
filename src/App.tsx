import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Donations from "./pages/Donations";
import ScanToGive from "./pages/ScanToGive";
import UserTriggeredGiving from "./pages/UserTriggeredGiving";
import BurnToGive from "./pages/BurnToGive";
import Rewards from "./pages/Rewards";
import DAO from "./pages/DAO";
import NGODashboard from "./pages/NGODashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatedBackground>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/scan-to-give" element={<ScanToGive />} />
            <Route path="/user-triggered-giving" element={<UserTriggeredGiving />} />
            <Route path="/burn-to-give" element={<BurnToGive />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/ngo-dashboard" element={<NGODashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AnimatedBackground>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
