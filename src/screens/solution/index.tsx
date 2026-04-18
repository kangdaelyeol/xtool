import {
    Contact,
    Creation,
    Partner,
    Header,
    Hero,
    Section1,
    Section2,
    Section3,
    SectionNav,
    TransformEducation,
    TrustBar,
} from './components'

export default function SolutionScreen() {
    return (
        <>
            <Header />
            <Hero />
            <SectionNav />
            <Partner />
            <Section1 />
            <Section2 />
            <TrustBar />
            <TransformEducation />
            <Creation />
            <Section3 />
            <Contact />
        </>
    )
}
