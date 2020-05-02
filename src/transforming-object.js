let user = {
  name: "Shraddha",
  address: {
    personal: {
      city: "Lucknow",
      area: "Aminabad"
    },
    office: {
      city: "Bangalore",
      area: {
        landmark: "Church"
      }
    }
  }
};

// transform above object in to below object
// {
//   user_name: "Shraddha";
//   user_address_personal_city: "Lucknow";
//   user_address_personal_area: "Aminabad";
//   user_address_office_city: "Bangalore";
//   user_address_office_area_landmark: "Church";
// }

let finalObj = {};
function transfromObject(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object")
      transfromObject(obj[key], parent + "_" + key);
    else finalObj[parent + "_" + key] = obj[key];
  }
}

transfromObject(user, "user");
console.log(finalObj);
