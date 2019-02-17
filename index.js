var kittens = ["Milo", "Otis", "Garfield"]
var kitty = "Ralph"
function destructivelyAppendKitten(kitty) {
  return kittens.push(kitty);
}
function destructivelyPrependKitten(kitty) {
  return kittens.unshift(kitty);
}
