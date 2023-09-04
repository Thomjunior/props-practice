import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function createCard(contact){
    return(   
        <Card  id={contact.id}
               key={contact.id}
               name= {contact.name}
               img= {contact.imgURL}
               tel={contact.phone}
               email={contact.email}
        />
    )
}

function App() {
  return (
    <div>  
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img ="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/374642625_6428393333953488_3226474268579016640_n.jpg?stp=dst-jpg_p600x600&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFEr5kdv0023yVEHCSRzfKvkjStrGngRDKSNK2saeBEMqfTuyrI7W9ukdkgwpVon2KKx5-IGuC_RSRmH_AKw9vE&_nc_ohc=5M9QMZ8xYlYAX9kiRqk&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDU6EtOyidAHBKZDj8Nk2Hx4I2f5pDpJsf0XariwSBZxg&oe=64FA3928"
      />
      {contacts.map(createCard)}
      {/* <Card
        name={ contacts[0].name}
        img=  {contacts[0].imgURL}
        email= {contacts[0].email}
        tel= {contacts[0].phone}
      />
       <Card
        name={ contacts[1].name}
        img=  {contacts[1].imgURL}
        email= {contacts[1].email}
        tel= {contacts[1].phone}
      /> <Card
        name={ contacts[2].name}
        img=  {contacts[2].imgURL}
        email= {contacts[2].email}
        tel= {contacts[2].phone}
      />
       */}
    </div>
  );
}

export default App;
