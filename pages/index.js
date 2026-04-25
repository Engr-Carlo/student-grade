import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Student Grade System - Manage Your Grades Efficiently</title>
        <meta name="description" content="Track, analyze, and improve your academic performance with our intuitive Student Grade System." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </>
  )
}
