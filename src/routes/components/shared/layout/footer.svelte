<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="logo" class="bg-black text-normal font-Roboto font-bold" style="border-radius: 0;">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://es.ford.com/" src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo-2003.png" alt="Flowbite Logo" target="_black" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
        <FooterLink href="https://www.ford.com/suvs/bronco/?gnav=footer-popular" target="_black">About</FooterLink>
        <FooterLink href="https://shop.ford.com/vehicleordertracking/?gnav=header-account" target="_black">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 sm:mx-auto lg:my-8" />
    <FooterCopyright href="/" by="Devm" />
  </Footer>