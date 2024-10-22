const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content} {note.id}
      <button onClick={() => toggleImportanceOf(note.id)}>{label}</button>
    </li>
  );
};

export default Note;
