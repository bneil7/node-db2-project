exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "4LJUSHPKPUBXIGG2T",
          make: "Chevrolet",
          model: "Blazer",
          mileage: 111111,
          transmission: "Automatic",
          title_status: "Clean",
        },
        {
          id: 2,
          VIN: "TYC3UUUBYMTMU2Z2E",
          make: "Nissan",
          model: "XTerra",
          mileage: 222222,
          transmission: "Automatic",
          title_status: "Clean",
        },
        {
          id: 3,
          VIN: "NE0MRGW5A542038S1",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 333333,
          transmission: "Manual",
          title_status: "Salvage",
        },
        {
          id: 4,
          VIN: "ZT85LGNRL56SC9RX4",
          make: "Honda",
          model: "CR-V",
          mileage: 444444,
          transmission: "Automatic",
          title_status: "Clean",
        },
        {
          id: 5,
          VIN: "8SQYX12LPPR82XIJM",
          make: "Kia",
          model: "Soul",
          mileage: 555555,
          transmission: "Manual",
          title_status: "Clean",
        },
      ]);
    });
};
