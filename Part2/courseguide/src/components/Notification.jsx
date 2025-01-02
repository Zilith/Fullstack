const Notification = ({ Message }) => {
  if (Message == null) {
    return null;
  }
  return (
    <div className="error">
        {Message}
    </div>
  )
};

export default Notification