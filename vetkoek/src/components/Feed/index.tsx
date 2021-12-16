import axios from "axios"
import { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../style"
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
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid mt-2"
                columnClassName="my-masonry-grid_column">
                {posts.map((item: object, index: number) => {
                    return (
                        <View key={index}>
                            <Post item={item} />
                        </View>
                    )
                })}
            </Masonry>
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
            <TouchableOpacity style={styles.loadMoreBtn}>
                <Text style={styles.loadMoreBtnText}>Load more</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Feed