
 import Vue from 'vue'
 import VTiptap from "@peepi/vuetify-tiptap";
 Vue.use(VTiptap);
Vue.prototype.$money = function (amount) {
  if (!amount) { amount = 0 }
  if (isNaN(amount)) {
    amount = 0
  }
  amount = parseFloat(amount).toFixed(2)
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

Vue.prototype.$IsNum = function (input) {
  if (isNaN(parseFloat(input)) || input == null) {
    return 0
  }
  input = parseFloat(input).toFixed(2)
  return parseFloat(input)
}
Vue.prototype.$printThis = function () {
    window.print()
}
Vue.prototype.$groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
