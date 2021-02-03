"use strict";

import supertest from "supertest";
const request = supertest("https://gorest.co.in/public-api/");

import { expect } from "chai";

const Token =
  "c6aef9e3a879687e044a91f99a7d4719319bc1cc598d93fd54cbd29de766346b";

describe("users", () => {
  //------------------- Get --------------------------------------------
  // it("Get/users", () => {
  // it("Get/usres/:id", () => {
  //   return request.get(`users/1?access-token=${Token}`).then((res) => {
  //     expect(res.body.data).to.be.any;
  //   });
  // });
  // it("Get/usres with query params", () => {
  //   const url = `users?access-token=${Token}&page=5&gender=female`;
  //   return request.get(url).then((res) => {
  //     expect(res.body.data).to.be.any;
  //     res.body.data.forEach((data) => {
  //       //expect(data.page).to.be.eq("5");
  //       expect(data.gender).to.be.eq("Female");
  //       expect(data.status).to.be.eq("Active");
  //     });
  //   });
  // });
  //-------------------- POST ----------------------------------------
  // it("Post/users", () => {
  //   const dataSend = {
  //     //id 1488
  //     email: `gopi${Math.floor(Math.random() * 1000)}@hotmail.com`,
  //     name: "TOM Leshi",
  //     gender: "Male",
  //     status: "Active",
  //   };
  //   return request
  //     .post("users")
  //     .set("Authorization", `Bearer ${Token}`)
  //     .send(dataSend)
  //     .then((res) => {
  //       console.log(res.body);
  //       expect(res.body.code).to.be.eq(201);
  //       expect(res.body.data.gender).to.be.eq("Male");
  //       expect(res.body.data.status).to.be.eq("Active");
  //     });
  // });
  //----------------------- PUT ------------------------------------
  // it("Put/user/:id", () => {
  //   const data = {
  //     name: `Pallosh ${Math.floor(Math.random() * 1000)}`,
  //     status: "Active",
  //     gender: "Female",
  //   };
  //   return request
  //     .put("users/179")
  //     .set("Authorization", `Bearer ${Token}`)
  //     .send(data)
  //     .then((res) => {
  //       console.log(res.body);
  //     });
  // });
  //--------------------- Delete ------------------------------
  // it("DELETE/user/:id", () => {
  //   return request
  //     .delete("users/173")
  //     .set("Authorization", `Bearer ${Token}`)
  //     .then((res) => {
  //       expect(res.body.data).to.be.eq(null);
  //       expect(res.body.code).to.be.eq(204);
  //     });
  // });

  //---------- Weit option using async and await----------------
  // it("Post/users", async () => {
  //     const dataSend = {
  //       //id 1488
  //       email: `gopi${Math.floor(Math.random() * 1000)}@hotmail.com`,
  //       name: "TOM Leshi",
  //       gender: "Male",
  //       status: "Active",
  //     };
  //     const resut = await request
  //       .post("users")
  //       .set("Authorization", `Bearer ${Token}`)
  //       .send(dataSend)
  //       .then((res) => {
  //         console.log(res.body);
  //       });
  //   });
});
