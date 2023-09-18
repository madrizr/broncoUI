<script>
    import '../app.css'
    import BroncoRoads from './components/home/bronco-roads.svelte';
    import Description from './components/home/description.svelte';
    import DesignThree from './components/home/design-three.svelte';
    import DesignTwo from './components/home/design-two.svelte';
    import Design from './components/home/design.svelte';
    import Header from './components/home/header.svelte'
    import Lead from './components/home/lead.svelte';
    import ModelTwo from './components/home/model-two.svelte';
    import Model from './components/home/model.svelte';
    import Phrase from './components/home/phrase.svelte';
    import Rear from './components/home/rear.svelte';
    import SectionImg from './components/home/section-img.svelte';
    import Footer from './components/shared/layout/footer.svelte';
    
</script>
<div>
    <Header />
    <Description />
    <Model />
    <Lead />
    <Phrase />
    <Design />
    <DesignTwo />
    <Rear />
    <ModelTwo />
    <DesignThree />
    <ModelTwo />
    <BroncoRoads />
    <ModelTwo />
    <SectionImg image="/assets/bronco-snow.png" alt="bronco-snow" />
    <Footer />
</div>
<slot />