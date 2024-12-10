import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Page() {
    return (
        <div className="p-4 grid grid-cols-4">
            <div>
                <Button variant={"destructive"}> Teszt Gomb</Button>
            </div>
            <div>
                <HoverCard>
                    <HoverCardTrigger>
                        Húzd rám az egeret!
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Meglepetés!
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div>
                <Drawer>
                    <DrawerTrigger>Megnyitás</DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Fiók</DrawerTitle>
                        </DrawerHeader>
                        <DrawerFooter>
                            
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel className="bg-green-400">
                    Panel 1
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel>
                    <ResizablePanelGroup direction="vertical">
                    <ResizablePanel className="bg-red-500">
                    Panel 2
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel className="bg-red-500">
                    Panel 3
                </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>

                
            </ResizablePanelGroup>
            </div>
        </div>
    )
}