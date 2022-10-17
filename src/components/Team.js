import React from "react";
import TeamMomber from "./TeamMomber";

function Team() {
  const users = [
    {
      img: "https://picsum.photos/150",
      name: "Hachem Tlijani",
      position: "Bryan Cranston",
      phone: "+46 12548652",
      email: "Tlija tlija@gmail.com",
      website: "tlija.com",
    },
    {
      img: "https://picsum.photos/151",
      name: "Taher",
      position: "Bryan Cranston",
      phone: "+46 12548652",
      email: "Tlija tlija@gmail.com",
      website: "tlija.com",
    },
    {
      img: "https://picsum.photos/150",
      name: "Hachem Tlijani",
      position: "Bryan Cranston",
      phone: "+46 12548652",
      email: "Tlija tlija@gmail.com",
      website: "tlija.com",
    },
    {
      img: "https://picsum.photos/150",
      name: "Hachem Tlijani",
      position: "Bryan Cranston",
      phone: "+46 12548652",
      email: "Tlija tlija@gmail.com",
      website: "tlija.com",
    },
    {
      img: "https://picsum.photos/150",
      name: "Hachem Tlijani",
      position: "Bryan Cranston",
      phone: "+46 12548652",
      email: "Tlija tlija@gmail.com",
    },
  ];
  return (
    <div className="row">
      {users.map((el) => (
        <TeamMomber info={el} />
      ))}
    </div>
  );
}
export default Team;
