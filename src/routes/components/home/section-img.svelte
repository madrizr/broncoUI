<script>
    export let image = '';
    export let alt = '';
</script>

<section class="header">
    <img src="{image}" alt="{alt}">
</section>

<style>
    .header{
        height: 100vh;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>