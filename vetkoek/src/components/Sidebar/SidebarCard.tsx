import React from "react"
import { View, Text } from "react-native"
import { styles } from "../style"
// import { Link } from "react-router-dom"


interface SidebarProps {
    cardTitle: string,
}

const SidebarCard: React.FC<SidebarProps> = ({ cardTitle }) => {
    return (
        <View style={styles.sidebarCardContainer}>
            <Text style={styles.sidebarCardHeading}>{cardTitle}</Text>
            <div className="link_hover px-5 py-3">
                <View>
                    <Text style={styles.sidebarLinkInfo}>Posted in <span className="underline cursor-pointer">Entrepreneurship</span></Text>
                </View>
                <View>
                    <Text style={styles.sidebarLinkTitle}>Article one</Text>
                </View>
            </div>
            <div className="link_hover px-5 py-3">
                <View>
                    <Text style={styles.sidebarLinkInfo}>Posted in <span className="underline cursor-pointer">Entrepreneurship</span></Text>
                </View>
                <View>
                    <Text style={styles.sidebarLinkTitle}>Article one</Text>
                </View>
            </div>
            <div className="link_hover px-5 py-3 link_hover_last">
                <View>
                    <Text style={styles.sidebarLinkInfo}>Posted in <span className="underline cursor-pointer">Entrepreneurship</span></Text>
                </View>
                <View>
                    <Text style={styles.sidebarLinkTitle}>Article one</Text>
                </View>
            </div>
        </View>
    )
}
export default SidebarCard