const UserDetails=({userDetailsRoute})=>{
    const user = userDetailsRoute.useLoaderData();
    if(!user) return <p>User not found</p>;
    return (
        <div>
            <h3>User Details</h3>
            <p>ID:{user.id}</p>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
        </div>
    )
}

export default UserDetails
