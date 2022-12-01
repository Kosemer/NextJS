import Layout from "../../components/layout/Layout";
import NewMeetupFroms from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return (
      <NewMeetupFroms onAddMeetup={addMeetupHandler}></NewMeetupFroms>
  );
}

export default NewMeetupPage;
