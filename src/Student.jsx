function Student(props) {
  return (
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Alien: {props.isStudent ? "No" : "Yes"}</p>
    </div>
  );
}

export default Student;
