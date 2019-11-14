<template>
  <div class="theme-series items-center">
    <div class="container">
      <CardHome :dataCard="dataCard"></CardHome>
    </div>
  </div>
</template>

<script>
import CardHome from "./components/card";
export default {
  name: "Series",
  components: {
    CardHome
  },
  data() {
    return {
      dataCard: [
        {
          fields: [
            {
              image:
                "https://occ-0-894-1567.1.nflxso.net/art/8ddc9/8a688e737601c0de965fc98e41403e972e78ddc9.png",
              router: "/valeu",
              name: "Valeu"
            }
          ]
        },
        {
          fields: [
            {
              image:
                "https://occ-0-894-1567.1.nflxso.net/art/8ddc9/8a688e737601c0de965fc98e41403e972e78ddc9.png",
              router: "/geral",
              name: "Geral"
            }
          ]
        },
        {
          fields: [
            {
              image:
                "https://occ-0-894-1567.1.nflxso.net/art/8ddc9/8a688e737601c0de965fc98e41403e972e78ddc9.png",
              router: "/valeu",
              name: "Madrugada"
            }
          ]
        },
        {
          fields: [
            {
              image:
                "https://occ-0-894-1567.1.nflxso.net/art/8ddc9/8a688e737601c0de965fc98e41403e972e78ddc9.png",
              router: "/valeu",
              name: "Esqueci"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
body {
  background: #000000;
  color: #fff;
}
</style>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
