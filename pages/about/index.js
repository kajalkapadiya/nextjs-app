import Link from "next/link";

const About = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <h1>Welcome to the About Page!</h1>
      {details.map((data) => (
        <div key={data.id}>
          <Link href={`/about/${data.id}`}>{data.name}</Link>
        </div>
      ))}
    </>
  );
};

export default About;
