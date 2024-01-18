export default function ContactRow({ setSelectedContactId, contact }) {
  console.log("setSelectedContractId in ContactRow", setSelectedContactId);
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
