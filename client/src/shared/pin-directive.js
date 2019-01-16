export default function (element, binding) {
  Object.keys(binding.value).forEach(position => {
    element.style[position] = binding.value[position]
  })
  element.style.position = 'absolute'
}

// The code above binds to both the bind and update hooks because its so frequent
// The code below is equivalent to the one above, but allows binding to idivitual hooks.
// function applySyle (element, binding) {
//   Object.keys(binding.value).forEach(position => {
//     element.style[position] = binding.value[position]
//   })
//   element.style.position = 'absolute'
// }

// export default {
//   bind (element, binding) {
//     applySyle(element, binding)
//   },
//   update (element, binding) {
//     applySyle(element, binding)
//   }
// }
