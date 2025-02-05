import { it, describe, expect } from "vitest";
import extendUsersSettings from "./extendUsersSettings";

const USERS = [
  {
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];

describe("extendUsersSettings", () => {
  it("should add id and isEnabled properties to each user", () => {
    const result = extendUsersSettings(USERS);
    expect(result).toEqual(USERS.map((user, index) => ({
      ...user,
      id: index,
      isEnabled: true
    })));
  });

  it("should handle empty array", () => {
    const result = extendUsersSettings([]);
    expect(result).toEqual([]);
  });
});
