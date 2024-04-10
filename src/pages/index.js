import Image from "next/image";
import { Inter } from "next/font/google";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
const inter = Inter({ subsets: ["latin"] });
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Section2 from "@/components/section/section2";
import Section3 from "@/components/section/section3";
import Section1 from "@/components/section/section1";

const mockData = [
  {
    label: "Left"
  },
  {
    label: "Right"
  }, {
    label: "Bottom"
  }
]

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <ResizablePanelGroup autoSaveId="example" direction="vertical">
        <ResizablePanel minSize={40}>

          <ResizablePanelGroup autoSaveId="example" direction="horizontal">
            <ResizablePanel minSize={25}>
              <Section1 />
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-black w-0.5" />
            <ResizablePanel minSize={25}>
              <Section2 />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-black w-100 h-0.5" />
        <ResizablePanel minSize={30}>
          <Section3 />
        </ResizablePanel>

      </ResizablePanelGroup>
      ;

    </main>
  );
}
