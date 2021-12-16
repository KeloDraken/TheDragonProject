import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import Post from "./Post"

const Feed = () => {
    const [posts, setPosts] = useState<Array<object>>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        handlePostFetch()
    }, [])

    const handlePostFetch = (): void => {
        const endpoint = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=11"
        axios.get(endpoint)
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
    }

    const renderPosts = () => {
        return (
            posts.map((item: object, index: number) => {
                return (
                    <View key={index}>
                        <Post item={item} />
                    </View>
                )
            })
        )
    }

    return (
        <View>
            {loading ?
                <div className="flex h-screen justify-center self-center align-center">
                    <div className="loader" />
                </div>
                :
                renderPosts()
            }
        </View>
    )
}

export default Feed