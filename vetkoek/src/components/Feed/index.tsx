import { view } from "@risingstack/react-easy-state"
import axios from "axios"
import { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import { Text, TouchableOpacity, View } from "react-native"
import { postsList } from "../../store"
import { styles } from "../style"
import Post from "./Post"

const Feed = view(() => {
    const [loading, setLoading] = useState<boolean>(true)
    const [posts, setPosts] = useState([])
    const [loadingMore, setLoadingMore] = useState<boolean>(false)
    const [start, setStart] = useState<number>(20)

    useEffect(() => {
        if (postsList.data.length === 0) {
            handlePostFetch()
        } else {
            setLoading(false)
        }
    }, [])

    const handleFetchMore = () => {
        setLoadingMore(true)
        const endpoint = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=20`
        axios.get(endpoint)
            .then((response) => {
                const newPostList = posts.concat(response.data)
                setPosts(newPostList)
                setLoadingMore(false)
                setStart(start + 20)
                console.log(posts);

            })
            .catch(e => {
                console.log(e);
            })
    }

    const handlePostFetch = (): void => {
        const endpoint = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20"
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
            <TouchableOpacity onPress={() => handleFetchMore()} style={styles.loadMoreBtn}>
                {loadingMore ?
                    <div className="flex justify-center self-center align-center">
                        <div className="loader" />
                    </div>
                    :
                    <Text style={styles.loadMoreBtnText}>Load more</Text>
                }

            </TouchableOpacity>
        </View>
    )
})

export default Feed