const javascript = {
  name: "okay"
}

const body = document.querySelector("body")

const update = () => {
  for (let i = 0; i < Object.keys(javascript).length; i++) {
    console.log("updating");
  }
}