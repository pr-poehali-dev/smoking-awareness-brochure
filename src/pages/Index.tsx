import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const smokingStats = [
    { region: "North America", percentage: 15.5, deaths: 480000, color: "bg-primary" },
    { region: "Europe", percentage: 28.7, deaths: 700000, color: "bg-secondary" },
    { region: "Asia", percentage: 47.6, deaths: 3000000, color: "bg-accent" },
    { region: "Africa", percentage: 10.8, deaths: 180000, color: "bg-destructive" }
  ];

  const healthConsequences = [
    { name: "Lung Cancer", risk: 90, icon: "Cigarette" },
    { name: "Heart Disease", risk: 70, icon: "Heart" },
    { name: "Stroke", risk: 60, icon: "Brain" },
    { name: "COPD", risk: 85, icon: "Wind" }
  ];

  const quittingMethods = [
    { method: "Nicotine Replacement Therapy", success: 65, description: "Patches, gum, lozenges" },
    { method: "Prescription Medications", success: 58, description: "Varenicline, Bupropion" },
    { method: "Behavioral Therapy", success: 52, description: "Counseling and support groups" },
    { method: "Cold Turkey", success: 25, description: "Immediate cessation without aids" }
  ];

  const programResults = [
    { year: "2010", smokers: 19.3 },
    { year: "2014", smokers: 16.8 },
    { year: "2018", smokers: 13.7 },
    { year: "2022", smokers: 11.5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block p-4 bg-destructive/10 rounded-full mb-6">
            <Icon name="Cigarette" size={48} className="text-destructive" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Smoking: Facts & Statistics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the global impact of tobacco use through data-driven insights
          </p>
        </header>

        <Tabs defaultValue="statistics" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="statistics" className="text-sm md:text-base">Statistics</TabsTrigger>
            <TabsTrigger value="facts" className="text-sm md:text-base">Facts</TabsTrigger>
            <TabsTrigger value="consequences" className="text-sm md:text-base">Consequences</TabsTrigger>
            <TabsTrigger value="methods" className="text-sm md:text-base">Methods</TabsTrigger>
            <TabsTrigger value="programs" className="text-sm md:text-base">Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="statistics" className="mt-8 space-y-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="text-primary" />
                  Global Smoking Rates by Region
                </CardTitle>
                <CardDescription>Percentage of adult population who smoke (2023)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {smokingStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{stat.region}</span>
                      <span className="text-2xl font-bold text-primary">{stat.percentage}%</span>
                    </div>
                    <Progress value={stat.percentage * 2} className="h-3" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="AlertCircle" size={16} />
                      <span>~{stat.deaths.toLocaleString()} deaths annually</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">8 Million</CardTitle>
                  <CardDescription>Deaths per year globally</CardDescription>
                </CardHeader>
                <CardContent>
                  <Icon name="Users" size={40} className="text-primary/60" />
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent">1.3 Billion</CardTitle>
                  <CardDescription>Current tobacco users worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <Icon name="Globe" size={40} className="text-accent/60" />
                </CardContent>
              </Card>
              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-secondary">$1.4 Trillion</CardTitle>
                  <CardDescription>Annual healthcare & productivity costs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Icon name="DollarSign" size={40} className="text-secondary/60" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="facts" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingDown" className="text-primary" />
                    Positive Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">20-minute improvement</p>
                      <p className="text-sm text-muted-foreground">Heart rate and blood pressure drop to normal levels after quitting</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">2-12 weeks recovery</p>
                      <p className="text-sm text-muted-foreground">Circulation improves and lung function increases</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">50% risk reduction</p>
                      <p className="text-sm text-muted-foreground">Heart disease risk drops by half after 1 year smoke-free</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlertTriangle" className="text-destructive" />
                    Critical Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 bg-destructive rounded-full"></div>
                    <div>
                      <p className="font-semibold">7,000+ chemicals</p>
                      <p className="text-sm text-muted-foreground">Found in cigarette smoke, 70 known to cause cancer</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 bg-destructive rounded-full"></div>
                    <div>
                      <p className="font-semibold">41,000 deaths/year</p>
                      <p className="text-sm text-muted-foreground">From secondhand smoke exposure alone</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 bg-destructive rounded-full"></div>
                    <div>
                      <p className="font-semibold">90% start before 18</p>
                      <p className="text-sm text-muted-foreground">Most adult smokers began during teenage years</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="consequences" className="mt-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" className="text-destructive" />
                  Health Consequences & Risk Increase
                </CardTitle>
                <CardDescription>Percentage increase in risk for smokers vs. non-smokers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {healthConsequences.map((consequence, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <Icon name={consequence.icon} size={24} className="text-destructive" />
                        </div>
                        <span className="font-semibold text-lg">{consequence.name}</span>
                      </div>
                      <span className="text-3xl font-bold text-destructive">+{consequence.risk}%</span>
                    </div>
                    <Progress value={consequence.risk} className="h-3 [&>div]:bg-destructive" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Physical Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-orange-500 mt-0.5" />
                    <p>Reduced lung capacity and chronic breathing issues</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-orange-500 mt-0.5" />
                    <p>Increased risk of blood clots and arterial damage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-orange-500 mt-0.5" />
                    <p>Premature aging and skin damage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-orange-500 mt-0.5" />
                    <p>Weakened immune system function</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">Economic Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-purple-500 mt-0.5" />
                    <p>$2,000+ annual cost per smoker on cigarettes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-purple-500 mt-0.5" />
                    <p>Higher health insurance premiums</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-purple-500 mt-0.5" />
                    <p>Lost productivity due to smoking breaks</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Dot" size={20} className="text-purple-500 mt-0.5" />
                    <p>Increased medical expenses and treatments</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="methods" className="mt-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-secondary" />
                  Smoking Cessation Methods & Success Rates
                </CardTitle>
                <CardDescription>Clinical success rates after 6 months</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {quittingMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-lg">{method.method}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-secondary">{method.success}%</span>
                    </div>
                    <Progress value={method.success} className="h-3 [&>div]:bg-secondary" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border-green-200 text-center">
                <CardHeader>
                  <Icon name="CheckCircle" size={40} className="text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-green-700">Best Combination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">NRT + Behavioral Therapy increases success to <span className="font-bold text-2xl block mt-2 text-green-600">75%</span></p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200 text-center">
                <CardHeader>
                  <Icon name="Users" size={40} className="text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-blue-700">Support Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Group therapy doubles individual success rates</p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200 text-center">
                <CardHeader>
                  <Icon name="Phone" size={40} className="text-amber-600 mx-auto mb-2" />
                  <CardTitle className="text-amber-700">Quit Lines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Free telephone counseling available 24/7 in many countries</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="mt-8">
            <Card className="animate-scale-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingDown" className="text-green-600" />
                  Impact of Anti-Smoking Programs (USA)
                </CardTitle>
                <CardDescription>Decline in adult smoking rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {programResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="font-bold text-lg w-16">{result.year}</span>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Smoking Rate</span>
                          <span className="font-bold text-primary">{result.smokers}%</span>
                        </div>
                        <div className="h-8 bg-muted rounded-lg overflow-hidden relative">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 flex items-center justify-end pr-3"
                            style={{ width: `${result.smokers * 5}%` }}
                          >
                            <span className="text-white text-xs font-semibold">{result.smokers}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingDown" className="text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-green-800">40.4% Reduction</p>
                      <p className="text-sm text-green-700">From 2010 to 2022, comprehensive tobacco control programs achieved a significant decline in smoking rates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Building2" className="text-primary" />
                    Workplace Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Smoke-free policies</span>
                    <span className="font-bold text-primary">-29% smoking rate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Cessation assistance</span>
                    <span className="font-bold text-secondary">3x quit attempts</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Health insurance incentives</span>
                    <span className="font-bold text-green-600">$2,500 savings/year</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="School" className="text-accent" />
                    Youth Prevention Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">School education campaigns</span>
                    <span className="font-bold text-accent">-35% teen smoking</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="text-sm font-medium">Minimum age laws (21+)</span>
                    <span className="font-bold text-pink-600">-25% initiation</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-sm font-medium">Marketing restrictions</span>
                    <span className="font-bold text-indigo-600">-15% exposure</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center p-8 bg-muted/30 rounded-xl">
          <Icon name="Heart" size={32} className="text-destructive mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">It's Never Too Late to Quit</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Every cigarette you don't smoke is doing your body good. Start your smoke-free journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-primary" />
              <span>1-800-QUIT-NOW</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" size={16} className="text-primary" />
              <span>smokefree.gov</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" size={16} className="text-primary" />
              <span>Text QUIT to 47848</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
