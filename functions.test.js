const functions = require('./functions');

// Add function test
test("Adds numbers, 2 and 2 should return 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// isNull function test
test("Returns null", () => {
  expect(functions.isNull()).toBeNull();
});

// Check truthy or falsy statements
test("Should be truthy", () =>{
  expect(functions.returnValue(true)).toBeTruthy();
});

// Object testing
test("firstName should be serial", () =>{
  expect(functions.returnUser()).toEqual({
    firstName: "serial",
    isLoggedIn: true,
    lastName: "experiments"
  });
});

// Regex testing
test("No I in team", () => {
  expect('team').not.toMatch(/I/i);
});

// Array contains element
test("Element is in array", () =>{
  mockArray = ['user', 'user', 'admin']
  expect(mockArray).toContain('admin');
});

// Array contains object that contains element
test("Array must contain object with id: 1 and an object with name: mariana", () =>{
  const objectArray = [{id: 1, name: "macarena"}, {id:2, name: "mariana"}];
  expect(objectArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({id: 1}),
      expect.objectContaining({name: "mariana"})
    ])
  );
});

// Asynchronous operation using promise
test("Post fetched should be post with title sunt aut facere repellat provident occaecati excepturi optio reprehenderit", () => {
  expect.assertions(1);
  return functions.fetchPost()
    .then(res => {
      expect(res.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    })
});

// Asynchronous operation using async/await
test("Post fetched should be post with title sunt aut facere repellat provident occaecati excepturi optio reprehenderit", async () =>{
  expect.assertions(3);
  const data = await functions.fetchPost();
  expect(data.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  expect(data.id).toBe(1);
  expect(data.userId).toBe(1);
});
