import {SectionBanner} from "@/components/landingPage/SectionBanner"
import{SectionUsage} from "@/components/landingPage/SectionUsage"
import {SectionReview} from '@/components/landingPage/SectionReview'
import { SectionReviewDark } from "@/components/landingPage/SectionReviewDark";
import {SectionIDEGallery} from "@/components/landingPage/SectionIDEGallery";
import { SectionReviewSvelte } from "@/components/landingPage/SectionReviewSvelte";
import {SectionInstantDevExp} from '@/components/landingPage/SectionInstantDevExp';
export default function Home() {
  
  return (
    <main>
      <SectionBanner/>
      <SectionUsage/>
      <SectionInstantDevExp/>
      <SectionReview/>
      <SectionReviewDark/>
      <SectionIDEGallery/>
      <SectionReviewSvelte/>
    </main>
  )
}
