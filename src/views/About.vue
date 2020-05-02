<template>
  <div id="info" style="padding: 15px;">
    <h2>
      learning English through English, sticky note style.
    </h2>
    <h3>
      search for a word and the site will automatically add it along with its
      definition from the Oxford Dictionary.
    </h3>
    <h4 style="text-align: start;">
      technical details of project:<br />
      client side: HTML5, CSS3, JavaScript, Vue.js.<br />
      server side: Node.js.<br />
      DataBase: mongoDB.<br />
      external APIs: Oxford Dictionary API.<br />
      <br />
      Oxford Dictionary API Pricing:<br />
      type: PROTOTYPE,<br />
      pros: free :)<br />
      cons: 1000 requests per month, Limited data access, Limited request rate
    </h4>
    <img class="VueLogo" alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<style scoped>
.VueLogo {
  bottom: 0;
  right: 0;
  position: absolute;
  width: 35px;
  margin: 30px;
}

/* portrait tablets, portrait iPad, landscape e-readers,
 landscape 800x480 or 854x480 phones */
@media (min-width: 481px) and (max-width: 961px) {
  .VueLogo {
    display: none;
  }
  #info {
    font-size: small;
  }
}

/* tablet, landscape iPad, lo-res laptops ands desktops */
@media (min-width: 961px) {
  #info {
    font-size: medium;
  }
}
</style>
