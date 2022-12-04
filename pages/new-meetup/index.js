import { useRouter } from "next/router";
import NewMeetupFroms from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter()
   const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
    router.push('/')
  };

  return (
      <NewMeetupFroms onAddMeetup={addMeetupHandler}></NewMeetupFroms>
  );
}

export default NewMeetupPage;
