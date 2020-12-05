require("isomorphic-fetch");
import BPromise from "bluebird";

function getJson(url) {
  return fetch(url).then(function (resp) {
    console.log(url, resp);
    return resp.json();
    x = 43;
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  createAccount: function (user_info) {
    //return getJson(user_info).catch(handleError);
    const header = {
      'Accept': "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
    const searchParams = new URLSearchParams(user_info);
    return fetch(
      "http://localhost:8080/create",
      {
        method: "POST",
        headers: header,
        body: searchParams}).then(function(resp) {
        return resp.json();
      }
    )
  },
  getLogin: function (user_info) {
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
    const searchParams = new URLSearchParams(user_info);
    return fetch(
      "http://localhost:8080/login",
      {
        method: "POST",
        headers: header,
        body: searchParams}).then(function(resp) {
        return resp.json();
      }
    )
  }
};
