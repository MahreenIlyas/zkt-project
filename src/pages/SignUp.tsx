import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms & conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate sign up process
    setTimeout(() => {
      toast({
        title: "Account Created!",
        description: "Welcome to the Zakat platform. Please log in to continue.",
      });
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      {/* Left Side - Logo */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <Logo className="scale-150" />
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <div className="card-elegant p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Sign up</h1>
            </div>

            <form onSubmit={handleSignUp} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                />
                <Label 
                  htmlFor="terms" 
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Agree to terms & conditions
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary-hover"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign up'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <button 
                onClick={() => navigate('/login')}
                className="text-primary hover:text-primary-hover font-medium"
              >
                Log in
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Copyright © 2025. زكوة
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;