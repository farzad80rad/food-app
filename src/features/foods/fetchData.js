// A mock function to mimic making an async request for data

import { isPlain } from "@reduxjs/toolkit";

export async function fetchData() {
  console.log("enter food fetch");

  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              menu: [
                {
                  id: 0,
                  item: "dimsum eggplant",
                  price: 20.4,
                  img: "dimsum-eggplant.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 1,
                  item: "shrimp dimsum",
                  price: 20.4,
                  img: "dimsum-shrimp.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 2,
                  item: "soup dimsum",
                  price: 20.4,
                  img: "dimsum-soup.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
              ],
              meal: ["Breakfast", "Dinner", "Lunch"],
              rating: 4.9,
              deliveryTime: 35,
              freeDelivery: true,
              id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
              name: "All that and Dim Sum",
            },
            {
              menu: [
                {
                  id: 3,
                  item: "meat piza",
                  price: 20.4,
                  img: "pizza-meat.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 4,
                  item: "plain piza",
                  price: 20.4,
                  img: "pizza-plain.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 5,
                  item: "veggie piza",
                  price: 20.4,
                  img: "pizza-veggie.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
              ],
              meal: ["Dinner", "Lunch"],
              rating: 4.5,
              deliveryTime: 40,
              freeDelivery: false,
              id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
              name: "A Real Pizza Work",
            },
            {
              menu: [
                {
                  id: 6,
                  item: "burrito ",
                  price: 20.4,
                  img: "taco-burrito.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 7,
                  item: "quesadilla ",
                  price: 20.4,
                  img: "taco-quesadilla.png",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
                {
                  id: 8,
                  item: "taco ",
                  price: 20.4,
                  img: "taco-taco.jpg",
                  options: ["o1", "o2", "o3"],
                  addOns: ["ad1", "ad2", "ad3"],
                },
              ],
              meal: ["Dinner", "Lunch"],
              rating: 4.7,
              deliveryTime: 25,
              freeDelivery: true,
              id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
              name: "Taco bout Eating Tacos",
            },
          ],
        }),
      100
    )
  );
  // return await fetch(
  //"https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
  //{
  //  headers: {
  //    "Content-Type": "application/json",
  //    "x-api-key": process.env.AWS_API_KEY,
  //  },
  // }
  //).then((response) => response.json());
}
