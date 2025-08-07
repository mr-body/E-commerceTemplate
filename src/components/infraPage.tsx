import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { InfraHomePage } from "./infra/home";

interface InfraPageProps {
    className?: string;
    data: any;
}

export default function InfraPage({ className, data }: InfraPageProps) {
    return (
        <Tabs defaultValue="overview" className={cn("w-full py-4", className)}>
            <div className="flex justify-between border-b px-8">
                <TabsList className="flex bg-background p-0 border-b-0 py-6">
                    <TabsTrigger value="overview" className="tabStyle">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="projects" className="tabStyle">
                        Projects
                    </TabsTrigger>
                    <TabsTrigger value="integrations" className="tabStyle">
                        Integrations
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="tabStyle">
                        Activity
                    </TabsTrigger>
                    <TabsTrigger value="domains" className="tabStyle">
                        Domains
                    </TabsTrigger>
                    <TabsTrigger value="usage" className="tabStyle">
                        Usage
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="tabStyle">
                        Settings
                    </TabsTrigger>
                </TabsList>
                <div className="flex ">
                    <Button variant="outline">Connect to GitHub</Button>
                </div>
            </div>

            <TabsContent value="overview">
                <InfraHomePage />
            </TabsContent>
            <TabsContent value="projects">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </TabsContent>
            <TabsContent value="integrations">{/* Conteúdo Integrations */}</TabsContent>
            <TabsContent value="activity">{/* Conteúdo Activity */}</TabsContent>
            <TabsContent value="domains">{/* Conteúdo Domains */}</TabsContent>
            <TabsContent value="usage">{/* Conteúdo Usage */}</TabsContent>
            <TabsContent value="settings">{/* Conteúdo Settings */}</TabsContent>
        </Tabs>
    );
}
