
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/auth/AuthDialog";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-slate-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <img width={35} src="../public/android-chrome-192x192.png" alt="Nexora-image" />
            <span className="text-3xl font-bold text-primary">Nexora</span>
          </div>
          <div className="flex space-x-4">
            <AuthDialog trigger={<Button variant="outline">Login</Button>} />
            <AuthDialog trigger={<Button>Sign Up</Button>} />
          </div>
        </nav>

        <div className="py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Research smarter, <br/> <span className="text-primary">Not Harder</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
            <span className="text-primary font-bold" >Nexora</span> an AI-powered research assistant that helps college students find, analyze, and cite sources in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AuthDialog trigger={<Button size="lg" className="px-8">Get Started Free</Button>} />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-research-300/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/9572661/pexels-photo-9572661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ScholarScribe Dashboard Preview" 
                  className="rounded-lg border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Powerful Features for Researchers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ScholarScribe streamlines your research workflow with intelligent tools designed for academic success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Document Management</h3>
              <p className="text-muted-foreground">
                Organize your research papers and notes in one place with AI-powered summaries and insights.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Knowledge Graph</h3>
              <p className="text-muted-foreground">
                Discover connections between papers and concepts with an interactive knowledge graph.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Citation Management</h3>
              <p className="text-muted-foreground">
                Automatically format and manage citations in various academic styles with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Research Workflow?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join ScholarScribe today and experience the power of AI-assisted academic research.
          </p>
          <AuthDialog trigger={<Button size="lg" className="px-8">Get Started Free</Button>} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-slate-800 text-center md:text-left text-slate-500 flex items-center justify-between">
          <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold">Nexora</span>
            </div>
            <p>&copy; {new Date().getFullYear()} ScholarScribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
