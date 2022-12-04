import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description."
    ></MeetupDetail>
  );
}

export async function getStaticPaths () {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupid: 'm1'
                },
            },
            {
                params: {
                    meetupid: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupid = context.params.meetupid;

    console.log(meetupid)

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupid,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description.",
      },
    },
  };
}

export default MeetupDetails;
