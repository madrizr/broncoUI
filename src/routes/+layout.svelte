<script>
    import '../app.css'
    import BroncoRoads from './components/home/bronco-roads.svelte';
    import Description from './components/home/description.svelte';
    import DesignThree from './components/home/design-three.svelte';
    import DesignTwo from './components/home/design-two.svelte';
    import Design from './components/home/design.svelte';
    import Header from './components/home/header.svelte'
    import Lead from './components/home/lead.svelte';
    import Comparation from './components/home/comparation.svelte';
    import Phrase from './components/home/phrase.svelte';
    import Rear from './components/home/rear.svelte';
    import SectionImg from './components/home/section-img.svelte';
    import Footer from './components/shared/layout/footer.svelte';
    
</script>
<div class="bg-black">
    <Header />
    <Description />
    <Comparation />
    <Lead />
    <Phrase />
    <Design />
    <DesignTwo />
    <Rear />
    <Comparation imageLeftSrc="/assets/comparation/bronco-horizon.jpg" imageRightSrc="/assets/comparation/bronco_horizon-snow.jpg" />
    <DesignThree />
    <Comparation imageLeftSrc="/assets/comparation/bronco_diag-snow.jpg" imageRightSrc="/assets/comparation/bronco-night.jpg" />
    <BroncoRoads />
    <div class="my-5">
        <Comparation imageLeftSrc="/assets/comparation/bronco_diag-snow_night.jpg" imageRightSrc="/assets/comparation/bronco_diag-snow_day.jpg" />
    </div>
    <SectionImg image="/assets/bronco-snow.png" alt="bronco-snow" />
    <Footer />
</div>
<slot />