import { DownloadExtension } from "./DownloadExtension";
import { Faqs } from "./Faqs";
import { Features } from "./Features";
import { HeroSection } from "./HeroSection";
import { Prefooter } from "./Prefooter";

export function HomePage() {

    return (
        <div>
            <HeroSection ></HeroSection>
            <Features ></Features>
            <DownloadExtension></DownloadExtension>
            <Faqs ></Faqs>
            <Prefooter ></Prefooter>
        </div>
    )
}