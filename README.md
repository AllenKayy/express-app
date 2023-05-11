# RESTful APIs with Express app

- Using request params, add a user object to the request, the object should have the following keys, name, age, sex

- Return the user object as a json response 

```JavaScript
router.get("/:name/:age/:sex", (req, res) => {
  const { name, age, sex } = req.params;
  const user = { name, age, sex }
  res.json(user);
});
```

// route

http://localhost:3000/users/:Allen/:19/:female

Response - `{"name":":Allen","age":":19","sex":":female"}`
