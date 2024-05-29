import { data } from "./data.js";

export function load() {
  return {
    fields: data.map((data) => ({
      field: data.field,
      desc: data.desc,
      type: data.type,
      limit: data.limit,
      objects: data.objects,
    })),
  };
}

// export const actions = {
//      submit: async() =>{
//         const field = data.get("n{field}")
//      }
//  };

export const actions = {
  //change request type to http in function parameter if needed(i have as https right now)
  submit: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    let jsonVals = new Map();
    for (let entry of data) {
      if (entry.objects.length === 0) {
        jsonVals.set(
          entry.field,
          formData.get(entry.field) != null ? formData.get(entry.field) : "off"
        );
      } else {
        let objVals = [];
        let count = countInstancesOfName(
          formData,
          entry.objects[0].field)
        

        // let count = formData.keys.

        console.log(
          count +
            " " +
            entry.objects[0].field.substring(
              0,
              entry.objects[0].field.length - 1
            )
        );

        for (let i = 1; i <= count; i++) {
          let small_group_vals = new Map();
          for (let index in entry.objects) {
            var object = entry.objects[index];
            small_group_vals.set(
              object.field,
              formData.get(object.field + i) != null
                ? formData.get(object.field + i)
                : "off"
            );
          }
        //   let small_group_vals_obj = Object.fromEntries(small_group_vals);
        //   let small_group_json = JSON.stringify(small_group_vals_obj);
        //   objVals.push(small_group_json);
          objVals.push(JSON.stringify(Object.fromEntries(small_group_vals)))
        }
        jsonVals.set(entry.field, objVals);
      }
    }
    const obj = Object.fromEntries(jsonVals);
    const json = JSON.stringify(obj);
    console.log(json);
    return {
      success: true,
      data,
    };
  },
};

/**
 * @param {FormData} formData
 * @param {any} baseName
 */
function countInstancesOfName(formData, baseName) {
  // Convert FormData to an array of key-value pairs
  const entries = Array.from(formData.entries());

  // Create a regex to match the desired pattern
  const regex = new RegExp(`^${baseName}\\d+$`);

  // Filter the keys that match the pattern and count them
  // @ts-ignore
  const count = entries.filter(([key, value]) => regex.test(key)).length;

  return count;
}
