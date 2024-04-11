import Image from "next/image";
import { Inter } from "next/font/google";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
const inter = Inter({ subsets: ["latin"] });
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Section2 from "@/components/section/section2";
import Section3 from "@/components/section/section3";
import Section1 from "@/components/section/section1";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    label: "Left",
  },
  {
    label: "Right",
  },
  {
    label: "Bottom",
  },
];

export default function Home() {
  const [section1Height, setSection1Height] = useState(0);
  const [section3Height, setSection3Height] = useState(0);
  useEffect(() => {
    setSection3Height(document.querySelector(".section3").clientHeight);
    setSection1Height(document.querySelector(".section1").clientHeight);
  }, []);
  console.log(section1Height,section3Height)
  return (
    <main className="h-screen w-screen ">
      <ResizablePanelGroup
        autoSaveId="example"
        direction="vertical"
        className={""}
      >
        <ResizablePanel minSize={30}>
          <ResizablePanelGroup autoSaveId="example" direction="horizontal">
            <ResizablePanel
              minSize={25}

              className="section1"
              onResize={() => {
                setSection1Height(document.querySelector(".section1").clientHeight);
              }}
            >
              <Section1 height={section1Height}/>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-black w-0.5" />
            <ResizablePanel
              minSize={25}
              className="section2"
            >
              <Section2 height={section1Height}/>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-black w-100 h-0.5" />
        <ResizablePanel
          minSize={30}
          className="section3"
          onResize={() => {
            setSection3Height(document.querySelector(".section3").clientHeight);
            setSection1Height(document.querySelector(".section1").clientHeight);
          }}
        >
          <Section3 height={section3Height}/>
        </ResizablePanel>
      </ResizablePanelGroup>
      ;
    </main>
  );
}
