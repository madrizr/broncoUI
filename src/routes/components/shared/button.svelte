<script>

export let title = '';

</script>

<button class="button">{title}</button>

<style>
    .button {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #000000;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
}

.button::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #081534;
  transition: .5s ease;
}

.button:hover {
  color: #ffffff;
  transition-delay: .5s;
}

.button:hover::before {
  width: 100%;
}

.button::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #081534;
  transition: .4s ease;
  z-index: -1;
}

.button:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}
</style>