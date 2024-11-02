import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { URLShortener } from './components/URLShortener';
import { Analytics } from './components/Analytics';
import { LinkManager } from './components/LinkManager';
import { Settings } from './components/Settings';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('shorten');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-8 sticky top-0 z-10 bg-white p-4 rounded-lg shadow-sm">
            <TabsTrigger value="shorten">Shorten URL</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="links">My Links</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="shorten">
            <URLShortener />
          </TabsContent>

          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>

          <TabsContent value="links">
            <LinkManager />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

export default App;