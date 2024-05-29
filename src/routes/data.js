
//Take in data. Should be in the form {field:"", desc:"", type:"",objects:[{field:"", desc:"", type:""}......]}
export const data = [
  {
    field: "user_id",
    desc: "The AWS account ID. Please enter the aws account id",
    type: "text",
    objects: [],
  },
  { field: "owen", desc: "owowen", type: "checkbox", objects: [] },
  {
    field: "gus's thing",
    desc: "object array stuff",
    type: "object_array",
    objects: [
      {
        field: "test value",
        desc: "The AWS account ID. Please enter the aws account id",
        type: "number",
      },
      { field: "gus", desc: "guss", type: "checkbox" },
      {field: "sam", desc: "samm", type: "text" }
    ],
  },

  // { field: "tester", desc: "test", type: "four"},
];
