"use strict";

import request from '../config/common';
require('dotenv').config();
import { expect } from "chai";
const Token = process.env.TOKEN;


  describe("User", () => {//----------------start-------------

 let grabId ; // store user id

  describe("Post", () => {
    it("/users", () => {   //use ( .only ) to run just this test
      const dataSend = {
        //id 1488
        email: `example-${Math.floor(Math.random() * 1000)}@hotmail.com`,
        name: "TOM & Jerry",
        gender: "Male",
        status: "Active",
      };
      return request
        .post("users")
        .set("Authorization", `Bearer ${Token}`)
        .send(dataSend)
        .then((res) => {
          console.log(res.body);
          expect(res.body.code).to.be.eq(201);
          expect(res.body.data.gender).to.be.eq("Male");
          expect(res.body.data.status).to.be.eq("Active");
          grabId = res.body.data.id;
        });
    });
  });
  describe("Get", () => {   //get user by id
        it("/usres/:id", () => {
          return request
          .get(`users/${grabId}?access-token=${Token}`)
          .then((res) => {
            expect(res.body.code).to.be.eq(200);
            console.log(res.body);
          });          
        });
  });
  describe("Put", () => {   //put by id
    it("/user/:id", () => {
          const data = {
            name: `Pallosh ${Math.floor(Math.random() * 1000)}`,
            status: "Active",
            gender: "Female",
          };
          return request
            .put(`users/${grabId}`)
            .set("Authorization", `Bearer ${Token}`)
            .send(data)
            .then((res) => {
              console.log(res.body);
            });
        });
    });
    describe("Delete", () => {   //delete by id
        it("/user/:id", () => {
              return request
                .delete(`users/${grabId}`)
                .set("Authorization", `Bearer ${Token}`)
                .then((res) => {
                    if(expect(res.body.data).is.eq(null)){
                        console.log('User has been deleted successfully.');
                    }
                  expect(res.body.data).to.be.eq(null);
                  expect(res.body.code).to.be.eq(204);
                });
            });
    });


});
