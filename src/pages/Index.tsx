import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Index: React.FC = () => {
  const navigate = useNavigate();

  // Auto-redirect to login after a brief moment
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Background decoration */}
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <Logo className="scale-150 justify-center" />
            <div className="mt-8 space-y-4">
              <h1 className="text-5xl font-bold text-foreground">
                Welcome to Zakat Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Modern Islamic charity platform with cryptocurrency integration for seamless Zakat donations
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/login')}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg"
          >
            Get Started
          </Button>
          <p className="text-sm text-muted-foreground">
            Redirecting to login automatically in a few seconds...
          </p>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Copyright © 2025. زكوة Platform
        </div>
      </div>
    </div>
  );
};

export default Index;