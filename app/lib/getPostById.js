export default async function getPostById(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(!res.ok){
        throw new Error('Something went wrong while fetching post')
    }
    return res.json()
}