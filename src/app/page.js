import { Navbar } from "@/components/Navbar";
import {SectionBanner} from "@/components/sectionBanner/SectionBanner"
import{SectionUsage} from "@/components/SectionUsage"
import {SectionReview} from '@/components/SectionReview'
import { SectionReviewDark } from "@/components/SectionReviewDark";
import {SectionIDEGallery} from "@/components/SectionIDEGallery";
import { SectionReviewSvelte } from "@/components/SectionReviewSvelte";
import {SectionInstantDevExp} from '@/components/SectionInstantDevExp';
import Footer from "@/components/Footer";
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
