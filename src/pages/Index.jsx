import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Our Website</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a bare-bones application. More features coming soon!</p>
          <Button variant="primary">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;