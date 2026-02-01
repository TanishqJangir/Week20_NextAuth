import axios from "axios"

export default async function Profile(){

    // const res = await axios.get<{profilePicture : string}>("/api/profile", {
    //     headers : {
    //         authorization : localStorage.getItem("token")
    //     }
    // })

    const profilePicture = "this is the profile picture"

    return <div>
        {/* <img src={res.data.profilePicture} /> */}
        {profilePicture}
    </div>
}