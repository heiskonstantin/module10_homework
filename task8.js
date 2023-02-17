let map = new Map();
map.set("hello", "world");
map.set(1, 3);
map.set(true, null);
map.set(false, undefined);

for (let [key, value] of map) {
  console.log("key is - " + key + ", value is - " + value);
}
