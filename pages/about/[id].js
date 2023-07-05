import { useRouter } from 'next/router';

const aboutNext = () => {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  const router = useRouter();
  const memberId = parseInt(router.query.id); 
  console.log(memberId)

  const member = details.find((item) => item.id === memberId);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <h1>Member not found</h1>
      )}
    </div>
  );
};

export default aboutNext;
