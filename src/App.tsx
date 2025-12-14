import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from './features/shared/components/tabs';
import Generate from './pages/generate';
import Verify from './pages/verify';

export default function App() {
    return (
        <div className="p-8">
            <Tabs defaultValue="generate" className="mx-auto max-w-3xl">
                <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="generate">Generate</TabsTrigger>
                    <TabsTrigger value="verify">Verify</TabsTrigger>
                </TabsList>

                <TabsContent value="generate">
                    <Generate />
                </TabsContent>

                <TabsContent value="verify">
                    <Verify />
                </TabsContent>
            </Tabs>
        </div>
    );
}
