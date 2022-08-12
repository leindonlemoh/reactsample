import React from "react";

const contactInfo = [
  { name: "Juan", phone: "09886542" },
  { name: "Sam", phone: "09454512" },
  { name: "Diego", phone: "01545167" },
];
const contacts = contactInfo.map((contact, index) => {
  return (
    <li key={index}>
      {contact.name}: {contact.phone}
    </li>
  );
});
class ArrayList extends React.Component {
  render() {
    return <ul>{contacts}</ul>;
  }
}
export default ArrayList;
