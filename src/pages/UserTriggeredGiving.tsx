import React, { useState } from 'react';
import { Search, Copy, Calculator, Wallet, Zap, ShoppingCart, Coffee, Car, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Sidebar from '@/components/Sidebar';

const UserTriggeredGiving: React.FC = () => {
  const [zakatPercentage, setZakatPercentage] = useState([2.5]);
  const [autoZakatEnabled, setAutoZakatEnabled] = useState(true);

  const recentPurchases = [
    {
      name: 'Amazon',
      category: 'Shopping',
      date: '2024-01-15',
      amount: 'SAR 150.00',
      zakatAmount: 'SAR 3.75',
      zakatPercent: 2.5,
      status: 'unpaid',
      icon: ShoppingCart
    },
    {
      name: 'Starbucks',
      category: 'Food & Dining',
      date: '2024-01-14',
      amount: 'SAR 25.50',
      zakatAmount: 'SAR 0.64',
      zakatPercent: 2.5,
      status: 'paid',
      icon: Coffee
    },
    {
      name: 'Gas Station',
      category: 'Transportation',
      date: '2024-01-13',
      amount: 'SAR 65.00',
      zakatAmount: 'SAR 1.63',
      zakatPercent: 2.5,
      status: 'unpaid',
      icon: Car
    },
    {
      name: 'Grocery Store',
      category: 'Food & Groceries',
      date: '2024-01-12',
      amount: 'SAR 89.75',
      zakatAmount: 'SAR 2.24',
      zakatPercent: 2.5,
      status: 'paid',
      icon: Store
    }
  ];

  const metrics = [
    { label: 'Total Purchases', value: 'SAR 2,450', icon: ShoppingCart },
    { label: 'Total Zakat', value: 'SAR 61.25', icon: Calculator },
    { label: 'This Month', value: 'SAR 18.50', icon: Zap, color: 'text-success' },
    { label: 'Unpaid Zakat', value: 'SAR 5.38', icon: Wallet, color: 'text-warning' }
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
              <Zap className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">User Triggered Giving</h1>
                <p className="text-muted-foreground">Automatically calculate and pay Zakat on your purchases</p>
              </div>
            </div>

            {/* Zakat Settings */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">Zakat Settings</h3>
              <p className="text-muted-foreground mb-6">Configure your automatic Zakat calculations</p>
              
              {/* Auto Zakat Calculation */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg mb-6">
                <div>
                  <h4 className="font-semibold">Auto Zakat Calculation</h4>
                  <p className="text-sm text-muted-foreground">Automatically calculate Zakat on eligible purchases</p>
                </div>
                <Switch 
                  checked={autoZakatEnabled} 
                  onCheckedChange={setAutoZakatEnabled}
                />
              </div>

              {/* Zakat Percentage */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Zakat Percentage</h4>
                  <span className="text-2xl font-bold text-primary">{zakatPercentage[0]}%</span>
                </div>

                <Slider
                  value={zakatPercentage}
                  onValueChange={setZakatPercentage}
                  max={10}
                  min={1}
                  step={0.1}
                  className="w-full"
                />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1%</span>
                  <span>Traditional 2.5%</span>
                  <span>10%</span>
                </div>

                <div className="p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    The traditional Zakat rate is 2.5% of eligible wealth. You can adjust this percentage based on your personal circumstances and religious guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="card-elegant p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className={`font-bold text-lg ${metric.color || 'text-foreground'}`}>
                        {metric.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Purchases */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Recent Purchases</h3>
                  <p className="text-muted-foreground">Track Zakat calculations on your recent transactions</p>
                </div>
                <Button className="bg-primary hover:bg-primary-hover">
                  Pay All Pending Zakat
                </Button>
              </div>

              <div className="space-y-3">
                {recentPurchases.map((purchase, index) => (
                  <div key={index} className="card-elegant p-4 hover:border-primary/50 transition-smooth">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <purchase.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{purchase.name}</h4>
                            <span className="text-sm text-muted-foreground">• {purchase.category}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {purchase.date} • {purchase.amount}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-primary">{purchase.zakatAmount}</p>
                          <p className="text-sm text-muted-foreground">Zakat ({purchase.zakatPercent}%)</p>
                        </div>
                        {purchase.status === 'paid' ? (
                          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                            Paid
                          </Badge>
                        ) : (
                          <Button size="sm" className="bg-primary hover:bg-primary-hover">
                            Pay Zakat
                          </Button>
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

export default UserTriggeredGiving;