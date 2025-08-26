import React, { useState } from 'react';
import { Search, Copy, Flame, Coffee, Smartphone, ShoppingCart, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Sidebar from '@/components/Sidebar';

const BurnToGive: React.FC = () => {
  const [burnAmount, setBurnAmount] = useState('');

  const metrics = [
    { label: 'Total Burnable', value: 'SAR 415.24', icon: '$' },
    { label: 'Total Burned', value: 'SAR 299.99', icon: Flame, color: 'text-destructive' },
    { label: 'This Month', value: 'SAR 325.49', icon: '$', color: 'text-warning' },
    { label: 'Impact Multiplier', value: '2.1x', icon: '$', color: 'text-success' }
  ];

  const purchases = [
    {
      name: 'Coffee',
      merchant: 'Starbucks',
      date: '2024-01-15',
      amount: 'SAR 25.50',
      status: 'mirror',
      icon: Coffee
    },
    {
      name: 'Electronics',
      merchant: 'Amazon',
      date: '2024-01-14',
      amount: 'SAR 299.99',
      status: 'burned',
      icon: Smartphone
    },
    {
      name: 'Groceries',
      merchant: 'Supermarket',
      date: '2024-01-13',
      amount: 'SAR 89.75',
      status: 'mirror',
      icon: ShoppingCart
    },
    {
      name: 'Gas',
      merchant: 'Shell',
      date: '2024-01-12',
      amount: 'SAR 65.00',
      status: 'not-eligible',
      icon: Car
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Type something..."
                  className="pl-10 bg-muted border-0 h-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground px-3 py-1">
                124@ki214838...
                <Copy className="w-3 h-3 ml-2" />
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Burn to Give</h1>
                <p className="text-muted-foreground">Mirror your purchases by burning equivalent tokens for charity</p>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="card-elegant p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className={`font-bold text-xl ${metric.color || 'text-foreground'}`}>
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Burn */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Burn</h3>
              <p className="text-muted-foreground mb-6">Burn a custom amount of ZKTC tokens for charity</p>
              
              <div className="flex gap-3 mb-4">
                <Input
                  placeholder="Enter amount to burn (ZKTC)"
                  value={burnAmount}
                  onChange={(e) => setBurnAmount(e.target.value)}
                  className="h-12"
                />
                <Button className="bg-primary hover:bg-primary-hover h-12 px-6">
                  <Flame className="w-4 h-4 mr-2" />
                  Burn Tokens
                </Button>
              </div>

              <div className="p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>How it works:</strong> When you burn tokens, an equivalent value is donated to charity organizations. The impact multiplier increases the charitable value of your burn.
                </p>
              </div>
            </div>

            {/* Purchase Mirror */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Copy className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Purchase Mirror</h3>
              </div>
              <p className="text-muted-foreground">Toggle purchases to automatically burn equivalent tokens</p>

              <div className="space-y-3">
                {purchases.map((purchase, index) => (
                  <div key={index} className="card-elegant p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <purchase.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{purchase.name}</h4>
                            <span className="text-sm text-muted-foreground">• {purchase.merchant}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {purchase.date} • {purchase.amount}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {purchase.status === 'burned' ? (
                          <>
                            <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
                              Burned
                            </Badge>
                            <Switch checked={true} disabled />
                            <span className="text-sm text-muted-foreground">Burned</span>
                          </>
                        ) : purchase.status === 'mirror' ? (
                          <>
                            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                              <Copy className="w-3 h-3 mr-1" />
                              Mirror
                            </Button>
                          </>
                        ) : (
                          <span className="text-sm text-muted-foreground">Not eligible</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BurnToGive;