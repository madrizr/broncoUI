<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="logo" class="bg-black text-normal font-Roboto" style="border-radius: 0;">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://es.ford.com/" src="https://es.ford.com/cmslibs/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/Ford-logo.svg" alt="Flowbite Logo" target="_black" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 sm:mx-auto lg:my-8" />
    <FooterCopyright href="/" by="Bronco" />
  </Footer>