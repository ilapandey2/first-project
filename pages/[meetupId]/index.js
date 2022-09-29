import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails= (props)=>{
    return(
        <>
        <MeetupDetail
        src={"https://upload.wikimedia.org/wikipedia/commons/4/4e/Forest_Research_Institute_campus%2C_Dehradun%2C_India.jpg"}
        alt={"ALT"}
        title={"A First meetup"}
        description={"Meet up"}
        />
        
        </>
    )
}
export async function getStaticPaths(){
    return{
      fallback: false,
      paths:[
        {
          params:{
              meetupId:'m1'
          }
        },
        {
          params:{
            meetupId:'m2'
          }
        }
      ]
    }
  }
  export async function getStaticProps(context){
  
    //fetch data for single meetup
  
    const meetupId= context.params.meetupId;
    console.log(">>>", meetupId)
    return{
      props:{
        meetupData:{
          id:meetupId,
          image:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Forest_Research_Institute_campus%2C_Dehradun%2C_India.jpg",
          titile:"FIRST MEETUP PLACE",
          address:"FRI",
          description:"DESCRIPTION"
        }
      }
    }
  } 
export default MeetupDetails;